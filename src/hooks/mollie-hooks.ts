import { RequestInput } from "../lib/http.js";
import { BeforeCreateRequestHook, HookContext } from "./types.js";
import { SDK_METADATA } from "../lib/config.js";
import { globalUsage } from "./global-usage.js";
import { clientCanHaveGlobalFields } from "./mollie-auth-utils.js";

export class MollieHooks implements BeforeCreateRequestHook {
    beforeCreateRequest(hookContext: HookContext, input: RequestInput): RequestInput {
        // Validate path parameters
        this.validatePathParameters(input);
        
        // Always normalize to Headers
        let headers = new Headers(input.options?.headers);

        // Handle Idempotency-Key
        headers = this.handleIdempotencyKey(headers);

        // Customize Customize the User Agent header
        headers = this.customizeUserAgent(headers, hookContext);

        input = {
            ...input,
            options: {
                ...input.options,
                headers,
            },
        };

        if (clientCanHaveGlobalFields(hookContext.options)) {
            input = this.injectGlobalFields(input, hookContext);
        }

        return input;
    }

    private validatePathParameters(input: RequestInput): void {
        const url = input.url;
        const pathSegments = url.pathname.split('/');

        for (let i = 0; i < pathSegments.length; i++) {
            const segment = pathSegments[i];
            
            if (i === 0 && segment === '') {
                continue;
            }

            if (segment === '' || segment?.trim() === '') {
                throw new Error(
                    `Invalid request: empty path parameter detected in [${input.options?.method || 'GET'}] '${url.pathname}'`
                );
            }
        }
    }

    private handleIdempotencyKey(headers: Headers): Headers {
        const idempotencyKey = "Idempotency-Key";

        // Only add if missing or empty
        if (!headers.has(idempotencyKey) || !headers.get(idempotencyKey)) {
            headers.set(idempotencyKey, this.generateIdempotencyKey());
        }

        return headers;
    }

    private customizeUserAgent(headers: Headers, hookContext: HookContext): Headers {
        const userAgentKey = "User-Agent";
        const process = (globalThis as any)?.process;

        const customUserAgent = hookContext.options.customUserAgent;

        const genVersion = SDK_METADATA.genVersion;
        const sdkVersion = SDK_METADATA.sdkVersion;
        const nodeVersion = process?.version ? process?.version : "unknown";
        const packageName = SDK_METADATA.userAgent.split(" ").at(-1);

        let mollieUserAgent = `Speakeasy/${genVersion} TypeScript/${nodeVersion} ${packageName}/${sdkVersion}`;
        if (customUserAgent) {
            mollieUserAgent = `${mollieUserAgent} ${customUserAgent}`;
        }

        headers.set(userAgentKey, mollieUserAgent);
        return headers;
    }

    private injectGlobalFields(input: RequestInput, hookContext: HookContext): RequestInput {
        const operationID = hookContext.operationID;
        const options = hookContext.options;

        const fieldMap: Record<string, string | boolean | undefined> = {
            profileId: options.profileId,
            testmode: options.testmode,
        };

        const fieldsToInject: Record<string, string | boolean> = {};
        for (const [field, operations] of Object.entries(globalUsage)) {
            if ((operations as string[]).includes(operationID) && fieldMap[field] !== undefined) {
                fieldsToInject[field] = fieldMap[field] as string | boolean;
            }
        }

        if (Object.keys(fieldsToInject).length === 0) {
            return input;
        }

        let body: Record<string, unknown> = {};
        if (input.options?.body) {
            try {
                if (typeof input.options.body === "string") {
                    body = JSON.parse(input.options.body);
                } else if (input.options.body instanceof ArrayBuffer || input.options.body instanceof Uint8Array) {
                    body = JSON.parse(new TextDecoder().decode(input.options.body));
                } else {
                    body = input.options.body as unknown as Record<string, unknown>;
                }
            } catch {
                return input;
            }
        }

        for (const [field, value] of Object.entries(fieldsToInject)) {
            if (!(field in body)) {
                body[field] = value;
            }
        }

        const newContent = JSON.stringify(body);
        const headers = new Headers(input.options?.headers);
        headers.set("Content-Length", String(new TextEncoder().encode(newContent).length));

        return {
            ...input,
            options: { ...input.options, headers, body: newContent },
        };
    }

    private generateIdempotencyKey(): string {
        return crypto.randomUUID();
    }
}

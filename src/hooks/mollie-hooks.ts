import { RequestInput } from "../lib/http.js";
import { BeforeCreateRequestHook, HookContext } from "./types.js";
import { SDK_METADATA } from "../lib/config.js";

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

        // Populate the profileID and testmode if OAuth (this may update headers again)
        if (this.isOAuthRequest(headers, hookContext)) {
            input = this.populateProfileIdAndTestmode(input, hookContext);
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

    private isOAuthRequest(headers: Headers, hookContext: HookContext): boolean {
        const security = hookContext.options.security;

        if (typeof security === "function") {
            return false;
        }

        if (security === null) {
            return false;
        }

        const oAuth = security?.oAuth;
        if (!oAuth) {
            return false;
        }

        return headers.get("Authorization") === `Bearer ${oAuth}`;
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

    private populateProfileIdAndTestmode(input: RequestInput, hookContext: HookContext): RequestInput {
        const clientProfileId = hookContext.options.profileId;
        const clientTestmode = hookContext.options.testmode;

        const method = input.options?.method || "GET";

        if (method === "GET") {
            // Update the query parameters. If testmode or profileId are not present, add them.
            const url = new URL(input.url);
            
            // Add profileId if not already present
            if (clientProfileId !== undefined && !url.searchParams.has('profileId')) {
                url.searchParams.set('profileId', clientProfileId);
            }
            
            // Add testmode if not already present
            if (clientTestmode !== undefined && !url.searchParams.has('testmode')) {
                url.searchParams.set('testmode', String(clientTestmode));
            }
            
            return {
                ...input,
                url,
            };
        }

        // It's POST, DELETE, PATCH
        // Update the JSON body. If testmode or profileId are not present, add them.
        let body: any = {};
        
        if (input.options?.body) {
            try {
                // Parse the existing body if it's a string
                if (typeof input.options.body === 'string') {
                    body = JSON.parse(input.options.body);
                } else if (input.options.body instanceof ArrayBuffer || input.options.body instanceof Uint8Array) {
                    const decoder = new TextDecoder();
                    const text = decoder.decode(input.options.body);
                    body = JSON.parse(text);
                } else {
                    // If it's already an object, use it
                    body = input.options.body;
                }
            } catch (error) {
                // If it's not JSON, return the request unchanged
                return input;
            }
        }
        
        // Add profileId if not already present
        if (clientProfileId !== undefined && !('profileId' in body)) {
            body.profileId = clientProfileId;
        }
        
        // Add testmode if not already present
        if (clientTestmode !== undefined && !('testmode' in body)) {
            body.testmode = clientTestmode;
        }
        
        // Create a new request with updated body
        const newContent = JSON.stringify(body);
        
        // Ensure headers is a Headers object
        const headers = new Headers(input.options?.headers);
        headers.set('Content-Length', String(new TextEncoder().encode(newContent).length));
        
        return {
            ...input,
            options: {
                ...input.options,
                headers,
                body: newContent,
            },
        };
    }

    private generateIdempotencyKey(): string {
        return crypto.randomUUID();
    }
}

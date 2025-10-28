import { RequestInput } from "../lib/http.js";
import { BeforeCreateRequestHook, HookContext } from "./types.js";
import { SDK_METADATA } from "../lib/config.js";

export class MollieHooks implements BeforeCreateRequestHook {
    beforeCreateRequest(hookContext: HookContext, input: RequestInput): RequestInput {
        // Always normalize to Headers
        let headers = new Headers(input.options?.headers);

        // Handle Idempotency-Key
        headers = this.handleIdempotencyKey(headers);

        // Customize Customize the User Agent header
        headers = this.customizeUserAgent(headers, hookContext);

        return {
            ...input,
            options: {
                ...input.options,
                headers,
            },
        };
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

        const customUserAgent = hookContext.options.customUserAgent;

        const genVersion = SDK_METADATA.genVersion;
        const sdkVersion = SDK_METADATA.sdkVersion;
        const nodeVersion = typeof process !== "undefined" && process.version ? process.version : "unknown";
        const packageName = SDK_METADATA.userAgent.split(" ").at(-1);

        let mollieUserAgent = `Speakeasy/${genVersion} TypeScript/${nodeVersion} ${packageName}/${sdkVersion}`;
        if (customUserAgent) {
            mollieUserAgent = `${mollieUserAgent} ${customUserAgent}`;
        }

        console.log("Setting User-Agent to:", mollieUserAgent);

        headers.set(userAgentKey, mollieUserAgent);
        return headers;
    }

    private generateIdempotencyKey(): string {
        return crypto.randomUUID();
    }
}

import { RequestInput } from "../lib/http.js";
import { BeforeCreateRequestHook, HookContext } from "./types.js";

export class MollieHooks implements BeforeCreateRequestHook {
    beforeCreateRequest(_: HookContext, input: RequestInput): RequestInput {
        const idempotencyKey = "Idempotency-Key";

        // Always normalize to Headers
        const headers = new Headers(input.options?.headers);

        // Only add if missing or empty
        if (!headers.has(idempotencyKey) || !headers.get(idempotencyKey)) {
            headers.set(idempotencyKey, this.generateIdempotencyKey());
        }

        return {
            ...input,
            options: {
                ...input.options,
                headers,
            },
        };
    }

    private generateIdempotencyKey(): string {
        return crypto.randomUUID();
    }
}

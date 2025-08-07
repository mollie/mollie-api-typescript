import { v4 as uuidv4 } from 'uuid';

import {
    BeforeRequestContext,
    BeforeRequestHook
} from "./types.js";

export class MollieHooks implements BeforeRequestHook {
    beforeRequest(_: BeforeRequestContext, request: Request): Request {
        let idempotencyKey: string = 'idempotency-key';

        if (!request.headers.has(idempotencyKey) || !request.headers.get(idempotencyKey)) {
            request.headers.set(idempotencyKey, this.generateIdempotencyKey());
        }

        return request
    }

    private generateIdempotencyKey(): string {
        return uuidv4();
    }
}
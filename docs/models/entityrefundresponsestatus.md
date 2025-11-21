# EntityRefundResponseStatus

## Example Usage

```typescript
import { EntityRefundResponseStatus } from "mollie-api-typescript/models";

let value: EntityRefundResponseStatus = "queued";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"queued" | "pending" | "processing" | "refunded" | "failed" | "canceled" | Unrecognized<string>
```
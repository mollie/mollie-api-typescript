# RefundStatus

## Example Usage

```typescript
import { RefundStatus } from "mollie-api-typescript/models";

let value: RefundStatus = "queued";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"queued" | "pending" | "processing" | "refunded" | "failed" | "canceled" | Unrecognized<string>
```
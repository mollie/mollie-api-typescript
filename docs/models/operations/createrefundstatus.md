# CreateRefundStatus

Refunds may take some time to get confirmed.

## Example Usage

```typescript
import { CreateRefundStatus } from "mollie-api-typescript/models/operations";

let value: CreateRefundStatus = "queued";
```

## Values

```typescript
"queued" | "pending" | "processing" | "refunded" | "failed" | "canceled"
```
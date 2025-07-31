# GetRefundStatus

Refunds may take some time to get confirmed.

## Example Usage

```typescript
import { GetRefundStatus } from "mollie-api-typescript/models/operations";

let value: GetRefundStatus = "queued";
```

## Values

```typescript
"queued" | "pending" | "processing" | "refunded" | "failed" | "canceled"
```
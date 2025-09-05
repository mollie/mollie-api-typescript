# EntityRefundResponseStatus

Refunds may take some time to get confirmed.

## Example Usage

```typescript
import { EntityRefundResponseStatus } from "mollie-api-typescript/models";

let value: EntityRefundResponseStatus = "queued";
```

## Values

```typescript
"queued" | "pending" | "processing" | "refunded" | "failed" | "canceled"
```
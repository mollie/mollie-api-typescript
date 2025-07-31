# ListSettlementRefundsStatus

Refunds may take some time to get confirmed.

## Example Usage

```typescript
import { ListSettlementRefundsStatus } from "mollie-api-typescript/models/operations";

let value: ListSettlementRefundsStatus = "queued";
```

## Values

```typescript
"queued" | "pending" | "processing" | "refunded" | "failed" | "canceled"
```
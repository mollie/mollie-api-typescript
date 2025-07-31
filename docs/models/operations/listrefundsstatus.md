# ListRefundsStatus

Refunds may take some time to get confirmed.

## Example Usage

```typescript
import { ListRefundsStatus } from "mollie-api-typescript/models/operations";

let value: ListRefundsStatus = "queued";
```

## Values

```typescript
"queued" | "pending" | "processing" | "refunded" | "failed" | "canceled"
```
# ListAllRefundsStatus

Refunds may take some time to get confirmed.

## Example Usage

```typescript
import { ListAllRefundsStatus } from "mollie-api-typescript/models/operations";

let value: ListAllRefundsStatus = "queued";
```

## Values

```typescript
"queued" | "pending" | "processing" | "refunded" | "failed" | "canceled"
```
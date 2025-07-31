# CreatePaymentStatus

The payment's status. Refer to the [documentation regarding statuses](https://docs.mollie.com/docs/status-change#/) for more info about which
statuses occur at what point.

## Example Usage

```typescript
import { CreatePaymentStatus } from "mollie-api-typescript/models/operations";

let value: CreatePaymentStatus = "open";
```

## Values

```typescript
"open" | "pending" | "authorized" | "paid" | "canceled" | "expired" | "failed"
```
# CancelPaymentStatus

The payment's status. Refer to the [documentation regarding statuses](https://docs.mollie.com/docs/status-change#/) for more info about which
statuses occur at what point.

## Example Usage

```typescript
import { CancelPaymentStatus } from "mollie-api-typescript/models/operations";

let value: CancelPaymentStatus = "open";
```

## Values

```typescript
"open" | "pending" | "authorized" | "paid" | "canceled" | "expired" | "failed"
```
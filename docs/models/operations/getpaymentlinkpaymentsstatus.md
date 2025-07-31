# GetPaymentLinkPaymentsStatus

The payment's status. Refer to the [documentation regarding statuses](https://docs.mollie.com/docs/status-change#/) for more info about which
statuses occur at what point.

## Example Usage

```typescript
import { GetPaymentLinkPaymentsStatus } from "mollie-api-typescript/models/operations";

let value: GetPaymentLinkPaymentsStatus = "open";
```

## Values

```typescript
"open" | "pending" | "authorized" | "paid" | "canceled" | "expired" | "failed"
```
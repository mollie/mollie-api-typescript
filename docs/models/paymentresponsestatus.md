# PaymentResponseStatus

The payment's status. Refer to the [documentation regarding statuses](https://docs.mollie.com/docs/handling-payment-status) for more info about which
statuses occur at what point.

## Example Usage

```typescript
import { PaymentResponseStatus } from "mollie-api-typescript/models";

let value: PaymentResponseStatus = "open";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"open" | "pending" | "authorized" | "paid" | "canceled" | "expired" | "failed" | Unrecognized<string>
```
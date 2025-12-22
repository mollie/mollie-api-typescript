# ListEntityRefundSettlementAmount

This optional field will contain the approximate amount that will be deducted from your account balance, converted
to the currency your account is settled in.

The amount is a **negative** amount.

If the refund is not directly processed by Mollie, for example for PayPal refunds, the settlement amount will be
zero.

Since the field contains an estimated amount during refund processing, it may change over time. For example, while
the refund is queued the settlement amount is likely not yet available.

To retrieve accurate settlement amounts we recommend using the
[List balance transactions endpoint](list-balance-transactions) instead.

## Example Usage

```typescript
import { ListEntityRefundSettlementAmount } from "mollie-api-typescript/models";

let value: ListEntityRefundSettlementAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |
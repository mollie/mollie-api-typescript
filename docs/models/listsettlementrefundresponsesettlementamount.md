# ListSettlementRefundResponseSettlementAmount

The amount deducted from your account balance for this refund, converted to the currency your account is
settled in. Always a **negative** amount.

For refunds not directly processed by Mollie (e.g. PayPal), the settlement amount is zero.

## Example Usage

```typescript
import { ListSettlementRefundResponseSettlementAmount } from "mollie-api-typescript/models";

let value: ListSettlementRefundResponseSettlementAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |
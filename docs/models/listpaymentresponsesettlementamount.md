# ListPaymentResponseSettlementAmount

This optional field will contain the approximate amount that will be settled to your account, converted to the
currency your account is settled in.

Any amounts not settled by Mollie will not be reflected in this amount, e.g. PayPal or gift cards. If no amount is
settled by Mollie the `settlementAmount` is omitted from the response.

Please note that this amount might be recalculated and changed when the status of the payment changes. We suggest
using the List balance transactions endpoint instead to get more accurate settlement amounts for your payments.

## Example Usage

```typescript
import { ListPaymentResponseSettlementAmount } from "mollie-api-typescript/models";

let value: ListPaymentResponseSettlementAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |
# ListSubscriptionPaymentsTotalAmount

The total amount of the line, including VAT and discounts.

Should match the following formula: `(unitPrice × quantity) - discountAmount`.

The sum of all `totalAmount` values of all order lines should be equal to the full payment amount.

## Example Usage

```typescript
import { ListSubscriptionPaymentsTotalAmount } from "mollie-api-typescript/models/operations";

let value: ListSubscriptionPaymentsTotalAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |
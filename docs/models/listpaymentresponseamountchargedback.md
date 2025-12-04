# ListPaymentResponseAmountChargedBack

The total amount that was charged back for this payment. Only available when the total charged back amount is not
zero.

## Example Usage

```typescript
import { ListPaymentResponseAmountChargedBack } from "mollie-api-typescript/models";

let value: ListPaymentResponseAmountChargedBack = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |
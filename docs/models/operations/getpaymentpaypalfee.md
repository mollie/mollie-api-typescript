# GetPaymentPaypalFee

An amount object containing the fee PayPal will charge for this transaction. The field may be omitted if
PayPal will not charge a fee for this transaction.

## Example Usage

```typescript
import { GetPaymentPaypalFee } from "mollie-api-typescript/models/operations";

let value: GetPaymentPaypalFee = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |
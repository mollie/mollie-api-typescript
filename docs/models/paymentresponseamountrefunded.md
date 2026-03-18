# PaymentResponseAmountRefunded

The total amount that is already refunded. Only available when refunds are available for this payment. For some
payment methods, this amount may be higher than the payment amount, for example to allow reimbursement of the
costs for a return shipment to the customer.

## Example Usage

```typescript
import { PaymentResponseAmountRefunded } from "mollie-api-typescript/models";

let value: PaymentResponseAmountRefunded = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |
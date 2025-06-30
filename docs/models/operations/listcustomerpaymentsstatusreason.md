# ListCustomerPaymentsStatusReason

This object offers details about the status of a payment. Currently it is only available for point-of-sale payments.

You can find more information about the possible values of this object on [this page](status-reasons).**

## Example Usage

```typescript
import { ListCustomerPaymentsStatusReason } from "mollie-api-typescript/models/operations";

let value: ListCustomerPaymentsStatusReason = {
  code: "insufficient_funds",
  message:
    "The account associated with the card has insufficient funds. The shopper should use another payment method or\n"
    + "contact their bank.",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                            | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | A machine-readable code that indicates the reason for the payment's status.                                                       | insufficient_funds                                                                                                                |
| `message`                                                                                                                         | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | A description of the status reason, localized according to the payment `locale`.                                                  | The account associated with the card has insufficient funds. The shopper should use another payment method or<br/>contact their bank. |
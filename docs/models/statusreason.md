# StatusReason

This object offers details about the status of a payment. Currently it is only available for point-of-sale
payments.

You can find more information about the possible values of this object on
[this page](status-reasons).**

## Example Usage

```typescript
import { StatusReason } from "mollie-api-typescript/models";

let value: StatusReason = {
  code: "insufficient_funds",
  message:
    "The account associated with the card has insufficient funds. The shopper should use another payment method or\ncontact their bank.",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                            | [models.Code](../models/code.md)                                                                                                  | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               | insufficient_funds                                                                                                                |
| `message`                                                                                                                         | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | A description of the status reason, localized according to the payment `locale`.                                                  | The account associated with the card has insufficient funds. The shopper should use another payment method or<br/>contact their bank. |
# CreateOrderRefundLineAmount

The amount that you want to refund. In almost all cases, Mollie can determine the amount automatically.

The amount is required only if you are partially refunding an order line which has a non-zero `discountAmount`.

The amount you can refund depends on various properties of the order line and the create order refund request. The maximum that can be refunded is `unit price x quantity to ship`.

The minimum amount depends on the discount applied to the line, the quantity already refunded or shipped, the amounts already refunded or shipped and the quantity you want to refund.

If you do not send an amount, Mollie will determine the amount automatically or respond with an error if the amount cannot be determined automatically. The error will contain the `extra.minimumAmount` and `extra.maximumAmount` properties that allow you pick the right amount.

## Example Usage

```typescript
import { CreateOrderRefundLineAmount } from "mollie-api-typescript/models/operations";

let value: CreateOrderRefundLineAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |
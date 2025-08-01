# UpdatePaymentRecurring

The details of subsequent recurring billing cycles. These parameters are used in the Mollie Checkout
to inform the shopper of the details for recurring products in the payments.

## Example Usage

```typescript
import { UpdatePaymentRecurring } from "mollie-api-typescript/models/operations";

let value: UpdatePaymentRecurring = {
  description: "Gym subscription",
  interval: "... weeks",
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  times: 1,
  startDate: "2024-12-12",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `description`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | A description of the recurring item. If not present, the main description of the item will be used. | Gym subscription                                                                                    |
| `interval`                                                                                          | [operations.UpdatePaymentInterval](../../models/operations/updatepaymentinterval.md)                | :heavy_check_mark:                                                                                  | Cadence unit of the recurring item. For example: `12 months`, `52 weeks` or `365 days`.             | 12 months                                                                                           |
| `amount`                                                                                            | [operations.UpdatePaymentRecurringAmount](../../models/operations/updatepaymentrecurringamount.md)  | :heavy_minus_sign:                                                                                  | Total amount and currency of the recurring item.                                                    |                                                                                                     |
| `times`                                                                                             | *number*                                                                                            | :heavy_minus_sign:                                                                                  | Total number of charges for the subscription to complete. Leave empty for ongoing subscription.     | 1                                                                                                   |
| `startDate`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The start date of the subscription if it does not start right away (format `YYYY-MM-DD`)            | 2024-12-12                                                                                          |
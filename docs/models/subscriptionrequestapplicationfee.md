# SubscriptionRequestApplicationFee

With Mollie Connect you can charge fees on payments that your app is processing on behalf of other Mollie
merchants.

Setting an application fee on the subscription will ensure this fee is charged on each individual payment.

Refer to the `applicationFee` parameter on the [Get payment endpoint](get-payment) documentation for more
information.

## Example Usage

```typescript
import { SubscriptionRequestApplicationFee } from "mollie-api-typescript/models";

let value: SubscriptionRequestApplicationFee = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  description: "Platform fee",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `amount`                                                                                          | [models.Amount](../models/amount.md)                                                              | :heavy_check_mark:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |
| `description`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               | Platform fee                                                                                      |
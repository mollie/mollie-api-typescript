# Revenue

## Example Usage

```typescript
import { Revenue } from "mollie-api-typescript/models";

let value: Revenue = {
  description: "Credit card",
  method: "creditcard",
  count: 10,
  amountNet: {
    currency: "EUR",
    value: "10.00",
  },
  amountVat: {
    currency: "EUR",
    value: "10.00",
  },
  amountGross: {
    currency: "EUR",
    value: "10.00",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | A description of the revenue subtotal                                                             | Credit card                                                                                       |
| `method`                                                                                          | [models.PaymentMethod](../models/paymentmethod.md)                                                | :heavy_minus_sign:                                                                                | The payment method, if applicable                                                                 | creditcard                                                                                        |
| `count`                                                                                           | *number*                                                                                          | :heavy_minus_sign:                                                                                | The number of payments                                                                            | 10                                                                                                |
| `amountNet`                                                                                       | [models.Amount](../models/amount.md)                                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |
| `amountVat`                                                                                       | [models.Amount](../models/amount.md)                                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |
| `amountGross`                                                                                     | [models.Amount](../models/amount.md)                                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |
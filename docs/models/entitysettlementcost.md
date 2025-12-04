# EntitySettlementCost

## Example Usage

```typescript
import { EntitySettlementCost } from "mollie-api-typescript/models";

let value: EntitySettlementCost = {
  description: "Credit card - Visa debit consumer domestic",
  method: "creditcard",
  count: 10,
  rate: {
    fixed: {
      currency: "EUR",
      value: "10.00",
    },
    percentage: "2.5",
  },
  amountNet: {
    currency: "EUR",
    value: "10.00",
  },
  amountVat: null,
  amountGross: {
    currency: "EUR",
    value: "10.00",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `description`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | A description of the cost subtotal                                                                | Credit card - Visa debit consumer domestic                                                        |
| `method`                                                                                          | [models.PaymentMethod](../models/paymentmethod.md)                                                | :heavy_check_mark:                                                                                | The payment method, if applicable                                                                 | creditcard                                                                                        |
| `count`                                                                                           | *number*                                                                                          | :heavy_check_mark:                                                                                | The number of fees                                                                                | 10                                                                                                |
| `rate`                                                                                            | [models.EntitySettlementRate](../models/entitysettlementrate.md)                                  | :heavy_check_mark:                                                                                | The service rates, further divided into `fixed` and `percentage` costs.                           |                                                                                                   |
| `amountNet`                                                                                       | [models.Amount](../models/amount.md)                                                              | :heavy_check_mark:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |
| `amountVat`                                                                                       | [models.AmountNullable](../models/amountnullable.md)                                              | :heavy_check_mark:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |
| `amountGross`                                                                                     | [models.Amount](../models/amount.md)                                                              | :heavy_check_mark:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |
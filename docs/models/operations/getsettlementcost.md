# GetSettlementCost

## Example Usage

```typescript
import { GetSettlementCost } from "mollie-api-typescript/models/operations";

let value: GetSettlementCost = {
  description: "Credit card - Visa debit consumer domestic",
  method: "creditcard",
  count: 10,
  rate: {
    fixed: {
      currency: "EUR",
      value: "10.00",
    },
    percentage: {
      currency: "EUR",
      value: "10.00",
    },
  },
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A description of the cost subtotal                                                                 | Credit card - Visa debit consumer domestic                                                         |
| `method`                                                                                           | [operations.GetSettlementCostMethod](../../models/operations/getsettlementcostmethod.md)           | :heavy_minus_sign:                                                                                 | The payment method, if applicable                                                                  | creditcard                                                                                         |
| `count`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The number of fees                                                                                 | 10                                                                                                 |
| `rate`                                                                                             | [operations.GetSettlementRate](../../models/operations/getsettlementrate.md)                       | :heavy_minus_sign:                                                                                 | The service rates, further divided into `fixed` and `percentage` costs.                            |                                                                                                    |
| `amountNet`                                                                                        | [operations.GetSettlementCostAmountNet](../../models/operations/getsettlementcostamountnet.md)     | :heavy_minus_sign:                                                                                 | The net total cost, i.e. excluding VAT                                                             |                                                                                                    |
| `amountVat`                                                                                        | [operations.GetSettlementCostAmountVat](../../models/operations/getsettlementcostamountvat.md)     | :heavy_minus_sign:                                                                                 | The applicable VAT                                                                                 |                                                                                                    |
| `amountGross`                                                                                      | [operations.GetSettlementCostAmountGross](../../models/operations/getsettlementcostamountgross.md) | :heavy_minus_sign:                                                                                 | The gross total cost, i.e. including VAT                                                           |                                                                                                    |
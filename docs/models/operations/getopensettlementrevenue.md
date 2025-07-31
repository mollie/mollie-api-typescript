# GetOpenSettlementRevenue

## Example Usage

```typescript
import { GetOpenSettlementRevenue } from "mollie-api-typescript/models/operations";

let value: GetOpenSettlementRevenue = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A description of the revenue subtotal                                                                            | Credit card                                                                                                      |
| `method`                                                                                                         | [operations.GetOpenSettlementRevenueMethod](../../models/operations/getopensettlementrevenuemethod.md)           | :heavy_minus_sign:                                                                                               | The payment method, if applicable                                                                                | creditcard                                                                                                       |
| `count`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The number of payments                                                                                           | 10                                                                                                               |
| `amountNet`                                                                                                      | [operations.GetOpenSettlementRevenueAmountNet](../../models/operations/getopensettlementrevenueamountnet.md)     | :heavy_minus_sign:                                                                                               | The net total of received funds, i.e. excluding VAT                                                              |                                                                                                                  |
| `amountVat`                                                                                                      | [operations.GetOpenSettlementRevenueAmountVat](../../models/operations/getopensettlementrevenueamountvat.md)     | :heavy_minus_sign:                                                                                               | The applicable VAT                                                                                               |                                                                                                                  |
| `amountGross`                                                                                                    | [operations.GetOpenSettlementRevenueAmountGross](../../models/operations/getopensettlementrevenueamountgross.md) | :heavy_minus_sign:                                                                                               | The gross total of received funds, i.e. including VAT                                                            |                                                                                                                  |
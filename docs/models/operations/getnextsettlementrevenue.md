# GetNextSettlementRevenue

## Example Usage

```typescript
import { GetNextSettlementRevenue } from "mollie-api-typescript/models/operations";

let value: GetNextSettlementRevenue = {
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
| `method`                                                                                                         | [operations.GetNextSettlementRevenueMethod](../../models/operations/getnextsettlementrevenuemethod.md)           | :heavy_minus_sign:                                                                                               | The payment method, if applicable                                                                                | creditcard                                                                                                       |
| `count`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The number of payments                                                                                           | 10                                                                                                               |
| `amountNet`                                                                                                      | [operations.GetNextSettlementRevenueAmountNet](../../models/operations/getnextsettlementrevenueamountnet.md)     | :heavy_minus_sign:                                                                                               | The net total of received funds, i.e. excluding VAT                                                              |                                                                                                                  |
| `amountVat`                                                                                                      | [operations.GetNextSettlementRevenueAmountVat](../../models/operations/getnextsettlementrevenueamountvat.md)     | :heavy_minus_sign:                                                                                               | The applicable VAT                                                                                               |                                                                                                                  |
| `amountGross`                                                                                                    | [operations.GetNextSettlementRevenueAmountGross](../../models/operations/getnextsettlementrevenueamountgross.md) | :heavy_minus_sign:                                                                                               | The gross total of received funds, i.e. including VAT                                                            |                                                                                                                  |
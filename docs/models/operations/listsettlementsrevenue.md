# ListSettlementsRevenue

## Example Usage

```typescript
import { ListSettlementsRevenue } from "mollie-api-typescript/models/operations";

let value: ListSettlementsRevenue = {
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A description of the revenue subtotal                                                                        | Credit card                                                                                                  |
| `method`                                                                                                     | [operations.ListSettlementsRevenueMethod](../../models/operations/listsettlementsrevenuemethod.md)           | :heavy_minus_sign:                                                                                           | The payment method, if applicable                                                                            | creditcard                                                                                                   |
| `count`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | The number of payments                                                                                       | 10                                                                                                           |
| `amountNet`                                                                                                  | [operations.ListSettlementsRevenueAmountNet](../../models/operations/listsettlementsrevenueamountnet.md)     | :heavy_minus_sign:                                                                                           | The net total of received funds, i.e. excluding VAT                                                          |                                                                                                              |
| `amountVat`                                                                                                  | [operations.ListSettlementsRevenueAmountVat](../../models/operations/listsettlementsrevenueamountvat.md)     | :heavy_minus_sign:                                                                                           | The applicable VAT                                                                                           |                                                                                                              |
| `amountGross`                                                                                                | [operations.ListSettlementsRevenueAmountGross](../../models/operations/listsettlementsrevenueamountgross.md) | :heavy_minus_sign:                                                                                           | The gross total of received funds, i.e. including VAT                                                        |                                                                                                              |
# GetNextSettlementLessThanMonthGreaterThan

## Example Usage

```typescript
import { GetNextSettlementLessThanMonthGreaterThan } from "mollie-api-typescript/models/operations";

let value: GetNextSettlementLessThanMonthGreaterThan = {
  costs: [
    {
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
    },
  ],
  revenue: [
    {
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
    },
  ],
  invoiceId: "inv_aHbjjdrUdm",
  invoiceReference: "MOLR2021.0001399669",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `costs`                                                                                              | [operations.GetNextSettlementCost](../../models/operations/getnextsettlementcost.md)[]               | :heavy_minus_sign:                                                                                   | An array of cost objects, describing the fees withheld for each payment method during this period.   |                                                                                                      |
| `revenue`                                                                                            | [operations.GetNextSettlementRevenue](../../models/operations/getnextsettlementrevenue.md)[]         | :heavy_minus_sign:                                                                                   | An array of revenue objects containing the total revenue for each payment method during this period. |                                                                                                      |
| `invoiceId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the invoice created for this period, if the invoice has been created already.              | inv_aHbjjdrUdm                                                                                       |
| `invoiceReference`                                                                                   | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The invoice reference, if the invoice has been created already.                                      | MOLR2021.0001399669                                                                                  |
# ListEntitySettlementPeriods

## Example Usage

```typescript
import { ListEntitySettlementPeriods } from "mollie-api-typescript/models";

let value: ListEntitySettlementPeriods = {
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
| `costs`                                                                                              | [models.ListEntitySettlementCost](../models/listentitysettlementcost.md)[]                           | :heavy_minus_sign:                                                                                   | An array of cost objects, describing the fees withheld for each payment method during this period.   |                                                                                                      |
| `revenue`                                                                                            | [models.ListEntitySettlementRevenue](../models/listentitysettlementrevenue.md)[]                     | :heavy_minus_sign:                                                                                   | An array of revenue objects containing the total revenue for each payment method during this period. |                                                                                                      |
| `invoiceId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  | inv_aHbjjdrUdm                                                                                       |
| `invoiceReference`                                                                                   | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The invoice reference, if the invoice has been created already.                                      | MOLR2021.0001399669                                                                                  |
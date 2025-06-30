# GetOpenSettlementPeriods

For bookkeeping purposes, the settlement includes an overview of transactions included in the settlement. These transactions are grouped into 'period' objects — one for each calendar month.

For example, if a settlement includes funds from 15 April until 4 May, it will include two period objects. One for all transactions processed between 15 April and 30 April, and one for all transactions between 1 May and 4 May.

Period objects are grouped by year, and then by month. So in the above example, the full `periods` collection will look as follows: `{"2024": {"04": {...}, "05": {...}}}`. The year and month in this documentation are referred as `<year>` and `<month>`.

The example response should give a good idea of what this looks like in practise.

## Example Usage

```typescript
import { GetOpenSettlementPeriods } from "mollie-api-typescript/models/operations";

let value: GetOpenSettlementPeriods = {
  lessThanYearGreaterThan: {
    lessThanMonthGreaterThan: {
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
    },
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lessThanYearGreaterThan`                                                                                                  | [operations.GetOpenSettlementLessThanYearGreaterThan](../../models/operations/getopensettlementlessthanyeargreaterthan.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
# GetSettlementLessThanYearGreaterThan

## Example Usage

```typescript
import { GetSettlementLessThanYearGreaterThan } from "mollie-api-typescript/models/operations";

let value: GetSettlementLessThanYearGreaterThan = {
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
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `lessThanMonthGreaterThan`                                                                                           | [operations.GetSettlementLessThanMonthGreaterThan](../../models/operations/getsettlementlessthanmonthgreaterthan.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
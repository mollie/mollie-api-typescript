# GetBalanceReportChargebacks

Only available on `transaction-categories` grouping.

## Example Usage

```typescript
import { GetBalanceReportChargebacks } from "mollie-api-typescript/models/operations";

let value: GetBalanceReportChargebacks = {
  pending: {
    amount: {
      currency: "EUR",
      value: "10.00",
    },
    subtotals: null,
  },
  movedToAvailable: {
    amount: {
      currency: "EUR",
      value: "10.00",
    },
    subtotals: [
      {
        subTotals: [
          {
            count: 50,
            method: "creditcard",
            cardIssuer: "amex",
            cardAudience: "other",
            cardRegion: "domestic",
            feeType: "payment-fee",
            prepaymentPartType: "fee",
            transactionType: "payment",
          },
        ],
        count: 50,
        method: "creditcard",
        cardIssuer: "amex",
        cardAudience: "other",
        cardRegion: "domestic",
        feeType: "payment-fee",
        prepaymentPartType: "fee",
        transactionType: "payment",
      },
    ],
  },
  immediatelyAvailable: {
    amount: {
      currency: "EUR",
      value: "10.00",
    },
    subtotals: [
      {
        subTotals: [
          {
            count: 50,
            method: "creditcard",
            cardIssuer: "amex",
            cardAudience: "other",
            cardRegion: "domestic",
            feeType: "payment-fee",
            prepaymentPartType: "fee",
            transactionType: "payment",
          },
        ],
        count: 50,
        method: "creditcard",
        cardIssuer: "amex",
        cardAudience: "other",
        cardRegion: "domestic",
        feeType: "payment-fee",
        prepaymentPartType: "fee",
        transactionType: "payment",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `pending`                                                                                                | [operations.ChargebacksPending](../../models/operations/chargebackspending.md)                           | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `movedToAvailable`                                                                                       | [operations.ChargebacksMovedToAvailable](../../models/operations/chargebacksmovedtoavailable.md)         | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `immediatelyAvailable`                                                                                   | [operations.ChargebacksImmediatelyAvailable](../../models/operations/chargebacksimmediatelyavailable.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
# GetBalanceReportRefunds

Only available on `transaction-categories` grouping.

## Example Usage

```typescript
import { GetBalanceReportRefunds } from "mollie-api-typescript/models/operations";

let value: GetBalanceReportRefunds = {
  pending: {
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
  movedToAvailable: {
    amount: {
      currency: "EUR",
      value: "10.00",
    },
    subtotals: null,
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `pending`                                                                                        | [operations.RefundsPending](../../models/operations/refundspending.md)                           | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `movedToAvailable`                                                                               | [operations.RefundsMovedToAvailable](../../models/operations/refundsmovedtoavailable.md)         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `immediatelyAvailable`                                                                           | [operations.RefundsImmediatelyAvailable](../../models/operations/refundsimmediatelyavailable.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
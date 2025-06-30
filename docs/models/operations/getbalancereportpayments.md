# GetBalanceReportPayments

Only available on `transaction-categories` grouping.

## Example Usage

```typescript
import { GetBalanceReportPayments } from "mollie-api-typescript/models/operations";

let value: GetBalanceReportPayments = {
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `pending`                                                                                          | [operations.PaymentsPending](../../models/operations/paymentspending.md)                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `movedToAvailable`                                                                                 | [operations.PaymentsMovedToAvailable](../../models/operations/paymentsmovedtoavailable.md)         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `immediatelyAvailable`                                                                             | [operations.PaymentsImmediatelyAvailable](../../models/operations/paymentsimmediatelyavailable.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
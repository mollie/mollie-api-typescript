# AvailableBalance

The available balance. Only available if grouping is `status-balances`.

## Example Usage

```typescript
import { AvailableBalance } from "mollie-api-typescript/models/operations";

let value: AvailableBalance = {
  open: {
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
  movedFromPending: {
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
  close: {
    amount: {
      currency: "EUR",
      value: "10.00",
    },
    subtotals: null,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `open`                                                                                                             | [operations.AvailableBalanceOpen](../../models/operations/availablebalanceopen.md)                                 | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `movedFromPending`                                                                                                 | [operations.MovedFromPending](../../models/operations/movedfrompending.md)                                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `immediatelyAvailable`                                                                                             | [operations.AvailableBalanceImmediatelyAvailable](../../models/operations/availablebalanceimmediatelyavailable.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `close`                                                                                                            | [operations.AvailableBalanceClose](../../models/operations/availablebalanceclose.md)                               | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
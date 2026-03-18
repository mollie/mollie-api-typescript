# Open

Only available on `transaction-categories` grouping.

## Example Usage

```typescript
import { Open } from "mollie-api-typescript/models";

let value: Open = {
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
  available: {
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

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `pending`                                | [models.SubGroup](../models/subgroup.md) | :heavy_minus_sign:                       | N/A                                      |
| `available`                              | [models.SubGroup](../models/subgroup.md) | :heavy_minus_sign:                       | N/A                                      |
# Close

Only available on `transaction-categories` grouping.

## Example Usage

```typescript
import { Close } from "mollie-api-typescript/models/operations";

let value: Close = {
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
    subtotals: null,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pending`                                                              | [operations.ClosePending](../../models/operations/closepending.md)     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `available`                                                            | [operations.CloseAvailable](../../models/operations/closeavailable.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
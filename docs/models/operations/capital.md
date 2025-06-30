# Capital

Only available on `transaction-categories` grouping.

## Example Usage

```typescript
import { Capital } from "mollie-api-typescript/models/operations";

let value: Capital = {
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
        subTotals: null,
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
| `pending`                                                                                        | [operations.CapitalPending](../../models/operations/capitalpending.md)                           | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `movedToAvailable`                                                                               | [operations.CapitalMovedToAvailable](../../models/operations/capitalmovedtoavailable.md)         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `immediatelyAvailable`                                                                           | [operations.CapitalImmediatelyAvailable](../../models/operations/capitalimmediatelyavailable.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
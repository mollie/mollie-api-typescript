# TransfersImmediatelyAvailable

## Example Usage

```typescript
import { TransfersImmediatelyAvailable } from "mollie-api-typescript/models/operations";

let value: TransfersImmediatelyAvailable = {
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
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                                                 | [operations.TransfersImmediatelyAvailableAmount](../../models/operations/transfersimmediatelyavailableamount.md)         | :heavy_minus_sign:                                                                                                       | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                        |
| `subtotals`                                                                                                              | [operations.TransfersImmediatelyAvailableSubtotal2](../../models/operations/transfersimmediatelyavailablesubtotal2.md)[] | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
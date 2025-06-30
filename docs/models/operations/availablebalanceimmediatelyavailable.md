# AvailableBalanceImmediatelyAvailable

## Example Usage

```typescript
import { AvailableBalanceImmediatelyAvailable } from "mollie-api-typescript/models/operations";

let value: AvailableBalanceImmediatelyAvailable = {
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

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                               | [operations.AvailableBalanceImmediatelyAvailableAmount](../../models/operations/availablebalanceimmediatelyavailableamount.md)         | :heavy_minus_sign:                                                                                                                     | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                                      |
| `subtotals`                                                                                                                            | [operations.AvailableBalanceImmediatelyAvailableSubtotal2](../../models/operations/availablebalanceimmediatelyavailablesubtotal2.md)[] | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
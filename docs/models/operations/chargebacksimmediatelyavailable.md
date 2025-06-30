# ChargebacksImmediatelyAvailable

## Example Usage

```typescript
import { ChargebacksImmediatelyAvailable } from "mollie-api-typescript/models/operations";

let value: ChargebacksImmediatelyAvailable = {
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                     | [operations.ChargebacksImmediatelyAvailableAmount](../../models/operations/chargebacksimmediatelyavailableamount.md)         | :heavy_minus_sign:                                                                                                           | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                            |
| `subtotals`                                                                                                                  | [operations.ChargebacksImmediatelyAvailableSubtotal2](../../models/operations/chargebacksimmediatelyavailablesubtotal2.md)[] | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
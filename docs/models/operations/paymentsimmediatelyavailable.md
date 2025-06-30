# PaymentsImmediatelyAvailable

## Example Usage

```typescript
import { PaymentsImmediatelyAvailable } from "mollie-api-typescript/models/operations";

let value: PaymentsImmediatelyAvailable = {
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                               | [operations.PaymentsImmediatelyAvailableAmount](../../models/operations/paymentsimmediatelyavailableamount.md)         | :heavy_minus_sign:                                                                                                     | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                      |
| `subtotals`                                                                                                            | [operations.PaymentsImmediatelyAvailableSubtotal2](../../models/operations/paymentsimmediatelyavailablesubtotal2.md)[] | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
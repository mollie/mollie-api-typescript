# CloseAvailable

## Example Usage

```typescript
import { CloseAvailable } from "mollie-api-typescript/models/operations";

let value: CloseAvailable = {
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
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `amount`                                                                                          | [operations.CloseAvailableAmount](../../models/operations/closeavailableamount.md)                | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
| `subtotals`                                                                                       | [operations.CloseAvailableSubtotal2](../../models/operations/closeavailablesubtotal2.md)[]        | :heavy_minus_sign:                                                                                | N/A                                                                                               |
# ComponentsSubTotals

## Example Usage

```typescript
import { ComponentsSubTotals } from "mollie-api-typescript/models";

let value: ComponentsSubTotals = {
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `subTotals`                                                                                        | [models.SubTotals](../models/subtotals.md)[]                                                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `count`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | Number of transactions of this type                                                                | 50                                                                                                 |
| `method`                                                                                           | [models.PaymentMethod](../models/paymentmethod.md)                                                 | :heavy_minus_sign:                                                                                 | The payment method, if applicable                                                                  | creditcard                                                                                         |
| `cardIssuer`                                                                                       | [models.ComponentsSubTotalsCardIssuer](../models/componentssubtotalscardissuer.md)                 | :heavy_minus_sign:                                                                                 | In case of payments transactions with card, the card issuer will be available                      | amex                                                                                               |
| `cardAudience`                                                                                     | [models.ComponentsSubTotalsCardAudience](../models/componentssubtotalscardaudience.md)             | :heavy_minus_sign:                                                                                 | In case of payments trnsactions with card, the card audience will be available.                    | other                                                                                              |
| `cardRegion`                                                                                       | [models.ComponentsSubTotalsCardRegion](../models/componentssubtotalscardregion.md)                 | :heavy_minus_sign:                                                                                 | In case of payments transactions with card, the card region will be available.                     | domestic                                                                                           |
| `feeType`                                                                                          | [models.ComponentsSubTotalsFeeType](../models/componentssubtotalsfeetype.md)                       | :heavy_minus_sign:                                                                                 | Present when the transaction represents a fee.                                                     | payment-fee                                                                                        |
| `prepaymentPartType`                                                                               | [models.ComponentsSubTotalsPrepaymentPartType](../models/componentssubtotalsprepaymentparttype.md) | :heavy_minus_sign:                                                                                 | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                | fee                                                                                                |
| `transactionType`                                                                                  | [models.ComponentsSubTotalsTransactionType](../models/componentssubtotalstransactiontype.md)       | :heavy_minus_sign:                                                                                 | Represents the transaction type                                                                    | payment                                                                                            |
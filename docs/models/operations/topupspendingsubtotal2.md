# TopupsPendingSubtotal2

## Example Usage

```typescript
import { TopupsPendingSubtotal2 } from "mollie-api-typescript/models/operations";

let value: TopupsPendingSubtotal2 = {
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `subTotals`                                                                                                                | [operations.TopupsPendingSubTotal1](../../models/operations/topupspendingsubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `count`                                                                                                                    | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Number of transactions of this type                                                                                        | 50                                                                                                                         |
| `method`                                                                                                                   | [operations.TopupsPendingSubtotalMethod2](../../models/operations/topupspendingsubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                         | Payment type of the transactions                                                                                           | creditcard                                                                                                                 |
| `cardIssuer`                                                                                                               | [operations.TopupsPendingSubtotalCardIssuer2](../../models/operations/topupspendingsubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                         | In case of payments transactions with card, the card issuer will be available                                              | amex                                                                                                                       |
| `cardAudience`                                                                                                             | [operations.TopupsPendingSubtotalCardAudience2](../../models/operations/topupspendingsubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                         | In case of payments trnsactions with card, the card audience will be available.                                            | other                                                                                                                      |
| `cardRegion`                                                                                                               | [operations.TopupsPendingSubtotalCardRegion2](../../models/operations/topupspendingsubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                         | In case of payments transactions with card, the card region will be available.                                             | domestic                                                                                                                   |
| `feeType`                                                                                                                  | [operations.TopupsPendingSubtotalFeeType2](../../models/operations/topupspendingsubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                         | Present when the transaction represents a fee.                                                                             | payment-fee                                                                                                                |
| `prepaymentPartType`                                                                                                       | [operations.TopupsPendingSubtotalPrepaymentPartType2](../../models/operations/topupspendingsubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                         | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                        | fee                                                                                                                        |
| `transactionType`                                                                                                          | [operations.TopupsPendingSubtotalTransactionType2](../../models/operations/topupspendingsubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                         | Represents the transaction type                                                                                            | payment                                                                                                                    |
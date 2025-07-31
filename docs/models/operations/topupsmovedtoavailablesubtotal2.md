# TopupsMovedToAvailableSubtotal2

## Example Usage

```typescript
import { TopupsMovedToAvailableSubtotal2 } from "mollie-api-typescript/models/operations";

let value: TopupsMovedToAvailableSubtotal2 = {
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

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `subTotals`                                                                                                                                  | [operations.TopupsMovedToAvailableSubTotal1](../../models/operations/topupsmovedtoavailablesubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |
| `count`                                                                                                                                      | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Number of transactions of this type                                                                                                          | 50                                                                                                                                           |
| `method`                                                                                                                                     | [operations.TopupsMovedToAvailableSubtotalMethod2](../../models/operations/topupsmovedtoavailablesubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                                           | Payment type of the transactions                                                                                                             | creditcard                                                                                                                                   |
| `cardIssuer`                                                                                                                                 | [operations.TopupsMovedToAvailableSubtotalCardIssuer2](../../models/operations/topupsmovedtoavailablesubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                                           | In case of payments transactions with card, the card issuer will be available                                                                | amex                                                                                                                                         |
| `cardAudience`                                                                                                                               | [operations.TopupsMovedToAvailableSubtotalCardAudience2](../../models/operations/topupsmovedtoavailablesubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                                           | In case of payments trnsactions with card, the card audience will be available.                                                              | other                                                                                                                                        |
| `cardRegion`                                                                                                                                 | [operations.TopupsMovedToAvailableSubtotalCardRegion2](../../models/operations/topupsmovedtoavailablesubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                                           | In case of payments transactions with card, the card region will be available.                                                               | domestic                                                                                                                                     |
| `feeType`                                                                                                                                    | [operations.TopupsMovedToAvailableSubtotalFeeType2](../../models/operations/topupsmovedtoavailablesubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                                           | Present when the transaction represents a fee.                                                                                               | payment-fee                                                                                                                                  |
| `prepaymentPartType`                                                                                                                         | [operations.TopupsMovedToAvailableSubtotalPrepaymentPartType2](../../models/operations/topupsmovedtoavailablesubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                                           | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                                          | fee                                                                                                                                          |
| `transactionType`                                                                                                                            | [operations.TopupsMovedToAvailableSubtotalTransactionType2](../../models/operations/topupsmovedtoavailablesubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                                           | Represents the transaction type                                                                                                              | payment                                                                                                                                      |
# ClosePendingSubtotal2

## Example Usage

```typescript
import { ClosePendingSubtotal2 } from "mollie-api-typescript/models/operations";

let value: ClosePendingSubtotal2 = {
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `subTotals`                                                                                                              | [operations.ClosePendingSubTotal1](../../models/operations/closependingsubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `count`                                                                                                                  | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Number of transactions of this type                                                                                      | 50                                                                                                                       |
| `method`                                                                                                                 | [operations.ClosePendingSubtotalMethod2](../../models/operations/closependingsubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                       | Payment type of the transactions                                                                                         | creditcard                                                                                                               |
| `cardIssuer`                                                                                                             | [operations.ClosePendingSubtotalCardIssuer2](../../models/operations/closependingsubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                       | In case of payments transactions with card, the card issuer will be available                                            | amex                                                                                                                     |
| `cardAudience`                                                                                                           | [operations.ClosePendingSubtotalCardAudience2](../../models/operations/closependingsubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                       | In case of payments trnsactions with card, the card audience will be available.                                          | other                                                                                                                    |
| `cardRegion`                                                                                                             | [operations.ClosePendingSubtotalCardRegion2](../../models/operations/closependingsubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                       | In case of payments transactions with card, the card region will be available.                                           | domestic                                                                                                                 |
| `feeType`                                                                                                                | [operations.ClosePendingSubtotalFeeType2](../../models/operations/closependingsubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                       | Present when the transaction represents a fee.                                                                           | payment-fee                                                                                                              |
| `prepaymentPartType`                                                                                                     | [operations.ClosePendingSubtotalPrepaymentPartType2](../../models/operations/closependingsubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                       | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                      | fee                                                                                                                      |
| `transactionType`                                                                                                        | [operations.ClosePendingSubtotalTransactionType2](../../models/operations/closependingsubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                       | Represents the transaction type                                                                                          | payment                                                                                                                  |
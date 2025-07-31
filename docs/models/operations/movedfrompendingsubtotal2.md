# MovedFromPendingSubtotal2

## Example Usage

```typescript
import { MovedFromPendingSubtotal2 } from "mollie-api-typescript/models/operations";

let value: MovedFromPendingSubtotal2 = {
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

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `subTotals`                                                                                                                      | [operations.MovedFromPendingSubTotal1](../../models/operations/movedfrompendingsubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `count`                                                                                                                          | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Number of transactions of this type                                                                                              | 50                                                                                                                               |
| `method`                                                                                                                         | [operations.MovedFromPendingSubtotalMethod2](../../models/operations/movedfrompendingsubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                               | Payment type of the transactions                                                                                                 | creditcard                                                                                                                       |
| `cardIssuer`                                                                                                                     | [operations.MovedFromPendingSubtotalCardIssuer2](../../models/operations/movedfrompendingsubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                               | In case of payments transactions with card, the card issuer will be available                                                    | amex                                                                                                                             |
| `cardAudience`                                                                                                                   | [operations.MovedFromPendingSubtotalCardAudience2](../../models/operations/movedfrompendingsubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                               | In case of payments trnsactions with card, the card audience will be available.                                                  | other                                                                                                                            |
| `cardRegion`                                                                                                                     | [operations.MovedFromPendingSubtotalCardRegion2](../../models/operations/movedfrompendingsubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                               | In case of payments transactions with card, the card region will be available.                                                   | domestic                                                                                                                         |
| `feeType`                                                                                                                        | [operations.MovedFromPendingSubtotalFeeType2](../../models/operations/movedfrompendingsubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                               | Present when the transaction represents a fee.                                                                                   | payment-fee                                                                                                                      |
| `prepaymentPartType`                                                                                                             | [operations.MovedFromPendingSubtotalPrepaymentPartType2](../../models/operations/movedfrompendingsubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                               | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                              | fee                                                                                                                              |
| `transactionType`                                                                                                                | [operations.MovedFromPendingSubtotalTransactionType2](../../models/operations/movedfrompendingsubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                               | Represents the transaction type                                                                                                  | payment                                                                                                                          |
# CorrectionsPendingSubtotal2

## Example Usage

```typescript
import { CorrectionsPendingSubtotal2 } from "mollie-api-typescript/models/operations";

let value: CorrectionsPendingSubtotal2 = {
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `subTotals`                                                                                                                          | [operations.CorrectionsPendingSubTotal1](../../models/operations/correctionspendingsubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |
| `count`                                                                                                                              | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Number of transactions of this type                                                                                                  | 50                                                                                                                                   |
| `method`                                                                                                                             | [operations.CorrectionsPendingSubtotalMethod2](../../models/operations/correctionspendingsubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                                   | Payment type of the transactions                                                                                                     | creditcard                                                                                                                           |
| `cardIssuer`                                                                                                                         | [operations.CorrectionsPendingSubtotalCardIssuer2](../../models/operations/correctionspendingsubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                                   | In case of payments transactions with card, the card issuer will be available                                                        | amex                                                                                                                                 |
| `cardAudience`                                                                                                                       | [operations.CorrectionsPendingSubtotalCardAudience2](../../models/operations/correctionspendingsubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                                   | In case of payments trnsactions with card, the card audience will be available.                                                      | other                                                                                                                                |
| `cardRegion`                                                                                                                         | [operations.CorrectionsPendingSubtotalCardRegion2](../../models/operations/correctionspendingsubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                                   | In case of payments transactions with card, the card region will be available.                                                       | domestic                                                                                                                             |
| `feeType`                                                                                                                            | [operations.CorrectionsPendingSubtotalFeeType2](../../models/operations/correctionspendingsubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                                   | Present when the transaction represents a fee.                                                                                       | payment-fee                                                                                                                          |
| `prepaymentPartType`                                                                                                                 | [operations.CorrectionsPendingSubtotalPrepaymentPartType2](../../models/operations/correctionspendingsubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                                   | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                                  | fee                                                                                                                                  |
| `transactionType`                                                                                                                    | [operations.CorrectionsPendingSubtotalTransactionType2](../../models/operations/correctionspendingsubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                                   | Represents the transaction type                                                                                                      | payment                                                                                                                              |
# FeePrepaymentsPendingSubtotal2

## Example Usage

```typescript
import { FeePrepaymentsPendingSubtotal2 } from "mollie-api-typescript/models/operations";

let value: FeePrepaymentsPendingSubtotal2 = {
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

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `subTotals`                                                                                                                                | [operations.FeePrepaymentsPendingSubTotal1](../../models/operations/feeprepaymentspendingsubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `count`                                                                                                                                    | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Number of transactions of this type                                                                                                        | 50                                                                                                                                         |
| `method`                                                                                                                                   | [operations.FeePrepaymentsPendingSubtotalMethod2](../../models/operations/feeprepaymentspendingsubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                                         | Payment type of the transactions                                                                                                           | creditcard                                                                                                                                 |
| `cardIssuer`                                                                                                                               | [operations.FeePrepaymentsPendingSubtotalCardIssuer2](../../models/operations/feeprepaymentspendingsubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                                         | In case of payments transactions with card, the card issuer will be available                                                              | amex                                                                                                                                       |
| `cardAudience`                                                                                                                             | [operations.FeePrepaymentsPendingSubtotalCardAudience2](../../models/operations/feeprepaymentspendingsubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                                         | In case of payments trnsactions with card, the card audience will be available.                                                            | other                                                                                                                                      |
| `cardRegion`                                                                                                                               | [operations.FeePrepaymentsPendingSubtotalCardRegion2](../../models/operations/feeprepaymentspendingsubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                                         | In case of payments transactions with card, the card region will be available.                                                             | domestic                                                                                                                                   |
| `feeType`                                                                                                                                  | [operations.FeePrepaymentsPendingSubtotalFeeType2](../../models/operations/feeprepaymentspendingsubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                                         | Present when the transaction represents a fee.                                                                                             | payment-fee                                                                                                                                |
| `prepaymentPartType`                                                                                                                       | [operations.FeePrepaymentsPendingSubtotalPrepaymentPartType2](../../models/operations/feeprepaymentspendingsubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                                         | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                                        | fee                                                                                                                                        |
| `transactionType`                                                                                                                          | [operations.FeePrepaymentsPendingSubtotalTransactionType2](../../models/operations/feeprepaymentspendingsubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                                         | Represents the transaction type                                                                                                            | payment                                                                                                                                    |
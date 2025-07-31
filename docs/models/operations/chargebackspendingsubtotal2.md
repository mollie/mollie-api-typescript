# ChargebacksPendingSubtotal2

## Example Usage

```typescript
import { ChargebacksPendingSubtotal2 } from "mollie-api-typescript/models/operations";

let value: ChargebacksPendingSubtotal2 = {
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
| `subTotals`                                                                                                                          | [operations.ChargebacksPendingSubTotal1](../../models/operations/chargebackspendingsubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |
| `count`                                                                                                                              | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Number of transactions of this type                                                                                                  | 50                                                                                                                                   |
| `method`                                                                                                                             | [operations.ChargebacksPendingSubtotalMethod2](../../models/operations/chargebackspendingsubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                                   | Payment type of the transactions                                                                                                     | creditcard                                                                                                                           |
| `cardIssuer`                                                                                                                         | [operations.ChargebacksPendingSubtotalCardIssuer2](../../models/operations/chargebackspendingsubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                                   | In case of payments transactions with card, the card issuer will be available                                                        | amex                                                                                                                                 |
| `cardAudience`                                                                                                                       | [operations.ChargebacksPendingSubtotalCardAudience2](../../models/operations/chargebackspendingsubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                                   | In case of payments trnsactions with card, the card audience will be available.                                                      | other                                                                                                                                |
| `cardRegion`                                                                                                                         | [operations.ChargebacksPendingSubtotalCardRegion2](../../models/operations/chargebackspendingsubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                                   | In case of payments transactions with card, the card region will be available.                                                       | domestic                                                                                                                             |
| `feeType`                                                                                                                            | [operations.ChargebacksPendingSubtotalFeeType2](../../models/operations/chargebackspendingsubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                                   | Present when the transaction represents a fee.                                                                                       | payment-fee                                                                                                                          |
| `prepaymentPartType`                                                                                                                 | [operations.ChargebacksPendingSubtotalPrepaymentPartType2](../../models/operations/chargebackspendingsubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                                   | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                                  | fee                                                                                                                                  |
| `transactionType`                                                                                                                    | [operations.ChargebacksPendingSubtotalTransactionType2](../../models/operations/chargebackspendingsubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                                   | Represents the transaction type                                                                                                      | payment                                                                                                                              |
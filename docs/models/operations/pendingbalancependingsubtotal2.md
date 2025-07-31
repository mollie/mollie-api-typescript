# PendingBalancePendingSubtotal2

## Example Usage

```typescript
import { PendingBalancePendingSubtotal2 } from "mollie-api-typescript/models/operations";

let value: PendingBalancePendingSubtotal2 = {
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
| `subTotals`                                                                                                                                | [operations.PendingBalancePendingSubTotal1](../../models/operations/pendingbalancependingsubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `count`                                                                                                                                    | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Number of transactions of this type                                                                                                        | 50                                                                                                                                         |
| `method`                                                                                                                                   | [operations.PendingBalancePendingSubtotalMethod2](../../models/operations/pendingbalancependingsubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                                         | Payment type of the transactions                                                                                                           | creditcard                                                                                                                                 |
| `cardIssuer`                                                                                                                               | [operations.PendingBalancePendingSubtotalCardIssuer2](../../models/operations/pendingbalancependingsubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                                         | In case of payments transactions with card, the card issuer will be available                                                              | amex                                                                                                                                       |
| `cardAudience`                                                                                                                             | [operations.PendingBalancePendingSubtotalCardAudience2](../../models/operations/pendingbalancependingsubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                                         | In case of payments trnsactions with card, the card audience will be available.                                                            | other                                                                                                                                      |
| `cardRegion`                                                                                                                               | [operations.PendingBalancePendingSubtotalCardRegion2](../../models/operations/pendingbalancependingsubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                                         | In case of payments transactions with card, the card region will be available.                                                             | domestic                                                                                                                                   |
| `feeType`                                                                                                                                  | [operations.PendingBalancePendingSubtotalFeeType2](../../models/operations/pendingbalancependingsubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                                         | Present when the transaction represents a fee.                                                                                             | payment-fee                                                                                                                                |
| `prepaymentPartType`                                                                                                                       | [operations.PendingBalancePendingSubtotalPrepaymentPartType2](../../models/operations/pendingbalancependingsubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                                         | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                                        | fee                                                                                                                                        |
| `transactionType`                                                                                                                          | [operations.PendingBalancePendingSubtotalTransactionType2](../../models/operations/pendingbalancependingsubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                                         | Represents the transaction type                                                                                                            | payment                                                                                                                                    |
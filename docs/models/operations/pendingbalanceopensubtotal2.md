# PendingBalanceOpenSubtotal2

## Example Usage

```typescript
import { PendingBalanceOpenSubtotal2 } from "mollie-api-typescript/models/operations";

let value: PendingBalanceOpenSubtotal2 = {
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
| `subTotals`                                                                                                                          | [operations.PendingBalanceOpenSubTotal1](../../models/operations/pendingbalanceopensubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |
| `count`                                                                                                                              | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Number of transactions of this type                                                                                                  | 50                                                                                                                                   |
| `method`                                                                                                                             | [operations.PendingBalanceOpenSubtotalMethod2](../../models/operations/pendingbalanceopensubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                                   | Payment type of the transactions                                                                                                     | creditcard                                                                                                                           |
| `cardIssuer`                                                                                                                         | [operations.PendingBalanceOpenSubtotalCardIssuer2](../../models/operations/pendingbalanceopensubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                                   | In case of payments transactions with card, the card issuer will be available                                                        | amex                                                                                                                                 |
| `cardAudience`                                                                                                                       | [operations.PendingBalanceOpenSubtotalCardAudience2](../../models/operations/pendingbalanceopensubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                                   | In case of payments trnsactions with card, the card audience will be available.                                                      | other                                                                                                                                |
| `cardRegion`                                                                                                                         | [operations.PendingBalanceOpenSubtotalCardRegion2](../../models/operations/pendingbalanceopensubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                                   | In case of payments transactions with card, the card region will be available.                                                       | domestic                                                                                                                             |
| `feeType`                                                                                                                            | [operations.PendingBalanceOpenSubtotalFeeType2](../../models/operations/pendingbalanceopensubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                                   | Present when the transaction represents a fee.                                                                                       | payment-fee                                                                                                                          |
| `prepaymentPartType`                                                                                                                 | [operations.PendingBalanceOpenSubtotalPrepaymentPartType2](../../models/operations/pendingbalanceopensubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                                   | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                                  | fee                                                                                                                                  |
| `transactionType`                                                                                                                    | [operations.PendingBalanceOpenSubtotalTransactionType2](../../models/operations/pendingbalanceopensubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                                   | Represents the transaction type                                                                                                      | payment                                                                                                                              |
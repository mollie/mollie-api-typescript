# PendingBalanceCloseSubtotal2

## Example Usage

```typescript
import { PendingBalanceCloseSubtotal2 } from "mollie-api-typescript/models/operations";

let value: PendingBalanceCloseSubtotal2 = {
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

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `subTotals`                                                                                                                            | [operations.PendingBalanceCloseSubTotal1](../../models/operations/pendingbalanceclosesubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `count`                                                                                                                                | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Number of transactions of this type                                                                                                    | 50                                                                                                                                     |
| `method`                                                                                                                               | [operations.PendingBalanceCloseSubtotalMethod2](../../models/operations/pendingbalanceclosesubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                                     | Payment type of the transactions                                                                                                       | creditcard                                                                                                                             |
| `cardIssuer`                                                                                                                           | [operations.PendingBalanceCloseSubtotalCardIssuer2](../../models/operations/pendingbalanceclosesubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                                     | In case of payments transactions with card, the card issuer will be available                                                          | amex                                                                                                                                   |
| `cardAudience`                                                                                                                         | [operations.PendingBalanceCloseSubtotalCardAudience2](../../models/operations/pendingbalanceclosesubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                                     | In case of payments trnsactions with card, the card audience will be available.                                                        | other                                                                                                                                  |
| `cardRegion`                                                                                                                           | [operations.PendingBalanceCloseSubtotalCardRegion2](../../models/operations/pendingbalanceclosesubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                                     | In case of payments transactions with card, the card region will be available.                                                         | domestic                                                                                                                               |
| `feeType`                                                                                                                              | [operations.PendingBalanceCloseSubtotalFeeType2](../../models/operations/pendingbalanceclosesubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                                     | Present when the transaction represents a fee.                                                                                         | payment-fee                                                                                                                            |
| `prepaymentPartType`                                                                                                                   | [operations.PendingBalanceCloseSubtotalPrepaymentPartType2](../../models/operations/pendingbalanceclosesubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                                     | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                                    | fee                                                                                                                                    |
| `transactionType`                                                                                                                      | [operations.PendingBalanceCloseSubtotalTransactionType2](../../models/operations/pendingbalanceclosesubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                                     | Represents the transaction type                                                                                                        | payment                                                                                                                                |
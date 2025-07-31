# AvailableBalanceCloseSubtotal2

## Example Usage

```typescript
import { AvailableBalanceCloseSubtotal2 } from "mollie-api-typescript/models/operations";

let value: AvailableBalanceCloseSubtotal2 = {
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
| `subTotals`                                                                                                                                | [operations.AvailableBalanceCloseSubTotal1](../../models/operations/availablebalanceclosesubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `count`                                                                                                                                    | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Number of transactions of this type                                                                                                        | 50                                                                                                                                         |
| `method`                                                                                                                                   | [operations.AvailableBalanceCloseSubtotalMethod2](../../models/operations/availablebalanceclosesubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                                         | Payment type of the transactions                                                                                                           | creditcard                                                                                                                                 |
| `cardIssuer`                                                                                                                               | [operations.AvailableBalanceCloseSubtotalCardIssuer2](../../models/operations/availablebalanceclosesubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                                         | In case of payments transactions with card, the card issuer will be available                                                              | amex                                                                                                                                       |
| `cardAudience`                                                                                                                             | [operations.AvailableBalanceCloseSubtotalCardAudience2](../../models/operations/availablebalanceclosesubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                                         | In case of payments trnsactions with card, the card audience will be available.                                                            | other                                                                                                                                      |
| `cardRegion`                                                                                                                               | [operations.AvailableBalanceCloseSubtotalCardRegion2](../../models/operations/availablebalanceclosesubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                                         | In case of payments transactions with card, the card region will be available.                                                             | domestic                                                                                                                                   |
| `feeType`                                                                                                                                  | [operations.AvailableBalanceCloseSubtotalFeeType2](../../models/operations/availablebalanceclosesubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                                         | Present when the transaction represents a fee.                                                                                             | payment-fee                                                                                                                                |
| `prepaymentPartType`                                                                                                                       | [operations.AvailableBalanceCloseSubtotalPrepaymentPartType2](../../models/operations/availablebalanceclosesubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                                         | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                                        | fee                                                                                                                                        |
| `transactionType`                                                                                                                          | [operations.AvailableBalanceCloseSubtotalTransactionType2](../../models/operations/availablebalanceclosesubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                                         | Represents the transaction type                                                                                                            | payment                                                                                                                                    |
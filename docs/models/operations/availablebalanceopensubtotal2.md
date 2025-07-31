# AvailableBalanceOpenSubtotal2

## Example Usage

```typescript
import { AvailableBalanceOpenSubtotal2 } from "mollie-api-typescript/models/operations";

let value: AvailableBalanceOpenSubtotal2 = {
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `subTotals`                                                                                                                              | [operations.AvailableBalanceOpenSubTotal1](../../models/operations/availablebalanceopensubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |                                                                                                                                          |
| `count`                                                                                                                                  | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Number of transactions of this type                                                                                                      | 50                                                                                                                                       |
| `method`                                                                                                                                 | [operations.AvailableBalanceOpenSubtotalMethod2](../../models/operations/availablebalanceopensubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                                       | Payment type of the transactions                                                                                                         | creditcard                                                                                                                               |
| `cardIssuer`                                                                                                                             | [operations.AvailableBalanceOpenSubtotalCardIssuer2](../../models/operations/availablebalanceopensubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                                       | In case of payments transactions with card, the card issuer will be available                                                            | amex                                                                                                                                     |
| `cardAudience`                                                                                                                           | [operations.AvailableBalanceOpenSubtotalCardAudience2](../../models/operations/availablebalanceopensubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                                       | In case of payments trnsactions with card, the card audience will be available.                                                          | other                                                                                                                                    |
| `cardRegion`                                                                                                                             | [operations.AvailableBalanceOpenSubtotalCardRegion2](../../models/operations/availablebalanceopensubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                                       | In case of payments transactions with card, the card region will be available.                                                           | domestic                                                                                                                                 |
| `feeType`                                                                                                                                | [operations.AvailableBalanceOpenSubtotalFeeType2](../../models/operations/availablebalanceopensubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                                       | Present when the transaction represents a fee.                                                                                           | payment-fee                                                                                                                              |
| `prepaymentPartType`                                                                                                                     | [operations.AvailableBalanceOpenSubtotalPrepaymentPartType2](../../models/operations/availablebalanceopensubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                                       | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                                      | fee                                                                                                                                      |
| `transactionType`                                                                                                                        | [operations.AvailableBalanceOpenSubtotalTransactionType2](../../models/operations/availablebalanceopensubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                                       | Represents the transaction type                                                                                                          | payment                                                                                                                                  |
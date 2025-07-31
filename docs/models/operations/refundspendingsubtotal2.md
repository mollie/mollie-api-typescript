# RefundsPendingSubtotal2

## Example Usage

```typescript
import { RefundsPendingSubtotal2 } from "mollie-api-typescript/models/operations";

let value: RefundsPendingSubtotal2 = {
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `subTotals`                                                                                                                  | [operations.RefundsPendingSubTotal1](../../models/operations/refundspendingsubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `count`                                                                                                                      | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Number of transactions of this type                                                                                          | 50                                                                                                                           |
| `method`                                                                                                                     | [operations.RefundsPendingSubtotalMethod2](../../models/operations/refundspendingsubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                           | Payment type of the transactions                                                                                             | creditcard                                                                                                                   |
| `cardIssuer`                                                                                                                 | [operations.RefundsPendingSubtotalCardIssuer2](../../models/operations/refundspendingsubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                           | In case of payments transactions with card, the card issuer will be available                                                | amex                                                                                                                         |
| `cardAudience`                                                                                                               | [operations.RefundsPendingSubtotalCardAudience2](../../models/operations/refundspendingsubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                           | In case of payments trnsactions with card, the card audience will be available.                                              | other                                                                                                                        |
| `cardRegion`                                                                                                                 | [operations.RefundsPendingSubtotalCardRegion2](../../models/operations/refundspendingsubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                           | In case of payments transactions with card, the card region will be available.                                               | domestic                                                                                                                     |
| `feeType`                                                                                                                    | [operations.RefundsPendingSubtotalFeeType2](../../models/operations/refundspendingsubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                           | Present when the transaction represents a fee.                                                                               | payment-fee                                                                                                                  |
| `prepaymentPartType`                                                                                                         | [operations.RefundsPendingSubtotalPrepaymentPartType2](../../models/operations/refundspendingsubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                           | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                          | fee                                                                                                                          |
| `transactionType`                                                                                                            | [operations.RefundsPendingSubtotalTransactionType2](../../models/operations/refundspendingsubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                           | Represents the transaction type                                                                                              | payment                                                                                                                      |
# OpenPendingSubtotal2

## Example Usage

```typescript
import { OpenPendingSubtotal2 } from "mollie-api-typescript/models/operations";

let value: OpenPendingSubtotal2 = {
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `subTotals`                                                                                                            | [operations.OpenPendingSubTotal1](../../models/operations/openpendingsubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `count`                                                                                                                | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | Number of transactions of this type                                                                                    | 50                                                                                                                     |
| `method`                                                                                                               | [operations.OpenPendingSubtotalMethod2](../../models/operations/openpendingsubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                     | Payment type of the transactions                                                                                       | creditcard                                                                                                             |
| `cardIssuer`                                                                                                           | [operations.OpenPendingSubtotalCardIssuer2](../../models/operations/openpendingsubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                     | In case of payments transactions with card, the card issuer will be available                                          | amex                                                                                                                   |
| `cardAudience`                                                                                                         | [operations.OpenPendingSubtotalCardAudience2](../../models/operations/openpendingsubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                     | In case of payments trnsactions with card, the card audience will be available.                                        | other                                                                                                                  |
| `cardRegion`                                                                                                           | [operations.OpenPendingSubtotalCardRegion2](../../models/operations/openpendingsubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                     | In case of payments transactions with card, the card region will be available.                                         | domestic                                                                                                               |
| `feeType`                                                                                                              | [operations.OpenPendingSubtotalFeeType2](../../models/operations/openpendingsubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                     | Present when the transaction represents a fee.                                                                         | payment-fee                                                                                                            |
| `prepaymentPartType`                                                                                                   | [operations.OpenPendingSubtotalPrepaymentPartType2](../../models/operations/openpendingsubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                     | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                    | fee                                                                                                                    |
| `transactionType`                                                                                                      | [operations.OpenPendingSubtotalTransactionType2](../../models/operations/openpendingsubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                     | Represents the transaction type                                                                                        | payment                                                                                                                |
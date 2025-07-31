# OpenAvailableSubtotal2

## Example Usage

```typescript
import { OpenAvailableSubtotal2 } from "mollie-api-typescript/models/operations";

let value: OpenAvailableSubtotal2 = {
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `subTotals`                                                                                                                | [operations.OpenAvailableSubTotal1](../../models/operations/openavailablesubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `count`                                                                                                                    | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Number of transactions of this type                                                                                        | 50                                                                                                                         |
| `method`                                                                                                                   | [operations.OpenAvailableSubtotalMethod2](../../models/operations/openavailablesubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                         | Payment type of the transactions                                                                                           | creditcard                                                                                                                 |
| `cardIssuer`                                                                                                               | [operations.OpenAvailableSubtotalCardIssuer2](../../models/operations/openavailablesubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                         | In case of payments transactions with card, the card issuer will be available                                              | amex                                                                                                                       |
| `cardAudience`                                                                                                             | [operations.OpenAvailableSubtotalCardAudience2](../../models/operations/openavailablesubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                         | In case of payments trnsactions with card, the card audience will be available.                                            | other                                                                                                                      |
| `cardRegion`                                                                                                               | [operations.OpenAvailableSubtotalCardRegion2](../../models/operations/openavailablesubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                         | In case of payments transactions with card, the card region will be available.                                             | domestic                                                                                                                   |
| `feeType`                                                                                                                  | [operations.OpenAvailableSubtotalFeeType2](../../models/operations/openavailablesubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                         | Present when the transaction represents a fee.                                                                             | payment-fee                                                                                                                |
| `prepaymentPartType`                                                                                                       | [operations.OpenAvailableSubtotalPrepaymentPartType2](../../models/operations/openavailablesubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                         | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                        | fee                                                                                                                        |
| `transactionType`                                                                                                          | [operations.OpenAvailableSubtotalTransactionType2](../../models/operations/openavailablesubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                         | Represents the transaction type                                                                                            | payment                                                                                                                    |
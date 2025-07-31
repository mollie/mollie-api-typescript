# CapitalPendingSubtotal2

## Example Usage

```typescript
import { CapitalPendingSubtotal2 } from "mollie-api-typescript/models/operations";

let value: CapitalPendingSubtotal2 = {
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
| `subTotals`                                                                                                                  | [operations.CapitalPendingSubTotal1](../../models/operations/capitalpendingsubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `count`                                                                                                                      | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Number of transactions of this type                                                                                          | 50                                                                                                                           |
| `method`                                                                                                                     | [operations.CapitalPendingSubtotalMethod2](../../models/operations/capitalpendingsubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                           | Payment type of the transactions                                                                                             | creditcard                                                                                                                   |
| `cardIssuer`                                                                                                                 | [operations.CapitalPendingSubtotalCardIssuer2](../../models/operations/capitalpendingsubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                           | In case of payments transactions with card, the card issuer will be available                                                | amex                                                                                                                         |
| `cardAudience`                                                                                                               | [operations.CapitalPendingSubtotalCardAudience2](../../models/operations/capitalpendingsubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                           | In case of payments trnsactions with card, the card audience will be available.                                              | other                                                                                                                        |
| `cardRegion`                                                                                                                 | [operations.CapitalPendingSubtotalCardRegion2](../../models/operations/capitalpendingsubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                           | In case of payments transactions with card, the card region will be available.                                               | domestic                                                                                                                     |
| `feeType`                                                                                                                    | [operations.CapitalPendingSubtotalFeeType2](../../models/operations/capitalpendingsubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                           | Present when the transaction represents a fee.                                                                               | payment-fee                                                                                                                  |
| `prepaymentPartType`                                                                                                         | [operations.CapitalPendingSubtotalPrepaymentPartType2](../../models/operations/capitalpendingsubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                           | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                          | fee                                                                                                                          |
| `transactionType`                                                                                                            | [operations.CapitalPendingSubtotalTransactionType2](../../models/operations/capitalpendingsubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                           | Represents the transaction type                                                                                              | payment                                                                                                                      |
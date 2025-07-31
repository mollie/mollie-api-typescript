# PaymentsPendingSubtotal2

## Example Usage

```typescript
import { PaymentsPendingSubtotal2 } from "mollie-api-typescript/models/operations";

let value: PaymentsPendingSubtotal2 = {
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `subTotals`                                                                                                                    | [operations.PaymentsPendingSubTotal1](../../models/operations/paymentspendingsubtotal1.md)[]                                   | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `count`                                                                                                                        | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Number of transactions of this type                                                                                            | 50                                                                                                                             |
| `method`                                                                                                                       | [operations.PaymentsPendingSubtotalMethod2](../../models/operations/paymentspendingsubtotalmethod2.md)                         | :heavy_minus_sign:                                                                                                             | Payment type of the transactions                                                                                               | creditcard                                                                                                                     |
| `cardIssuer`                                                                                                                   | [operations.PaymentsPendingSubtotalCardIssuer2](../../models/operations/paymentspendingsubtotalcardissuer2.md)                 | :heavy_minus_sign:                                                                                                             | In case of payments transactions with card, the card issuer will be available                                                  | amex                                                                                                                           |
| `cardAudience`                                                                                                                 | [operations.PaymentsPendingSubtotalCardAudience2](../../models/operations/paymentspendingsubtotalcardaudience2.md)             | :heavy_minus_sign:                                                                                                             | In case of payments trnsactions with card, the card audience will be available.                                                | other                                                                                                                          |
| `cardRegion`                                                                                                                   | [operations.PaymentsPendingSubtotalCardRegion2](../../models/operations/paymentspendingsubtotalcardregion2.md)                 | :heavy_minus_sign:                                                                                                             | In case of payments transactions with card, the card region will be available.                                                 | domestic                                                                                                                       |
| `feeType`                                                                                                                      | [operations.PaymentsPendingSubtotalFeeType2](../../models/operations/paymentspendingsubtotalfeetype2.md)                       | :heavy_minus_sign:                                                                                                             | Present when the transaction represents a fee.                                                                                 | payment-fee                                                                                                                    |
| `prepaymentPartType`                                                                                                           | [operations.PaymentsPendingSubtotalPrepaymentPartType2](../../models/operations/paymentspendingsubtotalprepaymentparttype2.md) | :heavy_minus_sign:                                                                                                             | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation.                                            | fee                                                                                                                            |
| `transactionType`                                                                                                              | [operations.PaymentsPendingSubtotalTransactionType2](../../models/operations/paymentspendingsubtotaltransactiontype2.md)       | :heavy_minus_sign:                                                                                                             | Represents the transaction type                                                                                                | payment                                                                                                                        |
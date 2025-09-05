# SubTotals

## Example Usage

```typescript
import { SubTotals } from "mollie-api-typescript/models";

let value: SubTotals = {
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

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `count`                                                                             | *number*                                                                            | :heavy_minus_sign:                                                                  | Number of transactions of this type                                                 | 50                                                                                  |
| `method`                                                                            | [models.PaymentMethod](../models/paymentmethod.md)                                  | :heavy_minus_sign:                                                                  | The payment method, if applicable                                                   | creditcard                                                                          |
| `cardIssuer`                                                                        | [models.SubTotalsCardIssuer](../models/subtotalscardissuer.md)                      | :heavy_minus_sign:                                                                  | In case of payments transactions with card, the card issuer will be available       | amex                                                                                |
| `cardAudience`                                                                      | [models.SubTotalsCardAudience](../models/subtotalscardaudience.md)                  | :heavy_minus_sign:                                                                  | In case of payments trnsactions with card, the card audience will be available.     | other                                                                               |
| `cardRegion`                                                                        | [models.SubTotalsCardRegion](../models/subtotalscardregion.md)                      | :heavy_minus_sign:                                                                  | In case of payments transactions with card, the card region will be available.      | domestic                                                                            |
| `feeType`                                                                           | [models.SubTotalsFeeType](../models/subtotalsfeetype.md)                            | :heavy_minus_sign:                                                                  | Present when the transaction represents a fee.                                      | payment-fee                                                                         |
| `prepaymentPartType`                                                                | [models.SubTotalsPrepaymentPartType](../models/subtotalsprepaymentparttype.md)      | :heavy_minus_sign:                                                                  | Prepayment part: fee itself, reimbursement, discount, VAT or rounding compensation. | fee                                                                                 |
| `transactionType`                                                                   | [models.SubTotalsTransactionType](../models/subtotalstransactiontype.md)            | :heavy_minus_sign:                                                                  | Represents the transaction type                                                     | payment                                                                             |
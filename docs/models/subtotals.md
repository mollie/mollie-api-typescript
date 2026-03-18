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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `count`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | Number of transactions of this type                                        | 50                                                                         |
| `method`                                                                   | [models.PaymentMethod](../models/paymentmethod.md)                         | :heavy_minus_sign:                                                         | The payment method, if applicable                                          | creditcard                                                                 |
| `cardIssuer`                                                               | [models.BalanceCardIssuer](../models/balancecardissuer.md)                 | :heavy_minus_sign:                                                         | N/A                                                                        | amex                                                                       |
| `cardAudience`                                                             | [models.BalanceCardAudience](../models/balancecardaudience.md)             | :heavy_minus_sign:                                                         | N/A                                                                        | other                                                                      |
| `cardRegion`                                                               | [models.BalanceCardRegion](../models/balancecardregion.md)                 | :heavy_minus_sign:                                                         | N/A                                                                        | domestic                                                                   |
| `feeType`                                                                  | [models.BalanceFeeType](../models/balancefeetype.md)                       | :heavy_minus_sign:                                                         | N/A                                                                        | payment-fee                                                                |
| `prepaymentPartType`                                                       | [models.BalancePrepaymentPartType](../models/balanceprepaymentparttype.md) | :heavy_minus_sign:                                                         | N/A                                                                        | fee                                                                        |
| `transactionType`                                                          | [models.BalanceTransactionType](../models/balancetransactiontype.md)       | :heavy_minus_sign:                                                         | N/A                                                                        | payment                                                                    |
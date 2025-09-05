# PaymentLinkResponseApplicationFee

With Mollie Connect you can charge fees on payment links that your app is processing on behalf of other Mollie
merchants.

If you use OAuth to create payment links on a connected merchant's account, you can charge a fee using this
`applicationFee` parameter. If a payment on the payment link succeeds, the fee will be deducted from the merchant's balance and sent
to your own account balance.

## Example Usage

```typescript
import { PaymentLinkResponseApplicationFee } from "mollie-api-typescript/models";

let value: PaymentLinkResponseApplicationFee = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  description: "Platform fee",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                    | [models.Amount](../models/amount.md)                                                                                        | :heavy_check_mark:                                                                                                          | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                           |                                                                                                                             |
| `description`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The description of the application fee. This will appear on settlement reports towards both you and the<br/>connected merchant. | Platform fee                                                                                                                |
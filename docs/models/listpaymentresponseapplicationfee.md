# ListPaymentResponseApplicationFee

With Mollie Connect you can charge fees on payments that your app is processing on behalf of other Mollie
merchants.

If you use OAuth to create payments on a connected merchant's account, you can charge a fee using this
`applicationFee` parameter. If the payment succeeds, the fee will be deducted from the merchant's balance and sent
to your own account balance.

If instead you want to split a payment on your own account between yourself and a connected merchant, refer to the
`routing` parameter.

## Example Usage

```typescript
import { ListPaymentResponseApplicationFee } from "mollie-api-typescript/models";

let value: ListPaymentResponseApplicationFee = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  description: "10",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                    | [models.Amount](../models/amount.md)                                                                                        | :heavy_minus_sign:                                                                                                          | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                           |                                                                                                                             |
| `description`                                                                                                               | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The description of the application fee. This will appear on settlement reports towards both you and the<br/>connected merchant. | 10                                                                                                                          |
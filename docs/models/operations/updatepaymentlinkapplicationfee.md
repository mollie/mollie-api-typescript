# UpdatePaymentLinkApplicationFee

With Mollie Connect you can charge fees on payment links that your app is processing on behalf of other Mollie
merchants.

If you use OAuth to create payment links on a connected merchant's account, you can charge a fee using this
`applicationFee` parameter. If a payment on the payment link succeeds, the fee will be deducted from the merchant's balance and sent
to your own account balance.

## Example Usage

```typescript
import { UpdatePaymentLinkApplicationFee } from "mollie-api-typescript/models/operations";

let value: UpdatePaymentLinkApplicationFee = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  description: "Platform fee",
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                                                        | [operations.UpdatePaymentLinkApplicationFeeAmount](../../models/operations/updatepaymentlinkapplicationfeeamount.md)                                                            | :heavy_check_mark:                                                                                                                                                              | The fee that you wish to charge.<br/><br/>Be careful to leave enough space for Mollie's own fees to be deducted as well. For example, you cannot charge<br/>a €0.99 fee on a €1.00 payment. |                                                                                                                                                                                 |
| `description`                                                                                                                                                                   | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | The description of the application fee. This will appear on settlement reports towards both you and the<br/>connected merchant.                                                 | Platform fee                                                                                                                                                                    |
# PaymentResponseReceipt

The Point of sale receipt object.

## Example Usage

```typescript
import { PaymentResponseReceipt } from "mollie-api-typescript/models";

let value: PaymentResponseReceipt = {
  cardReadMethod: "contactless",
  cardVerificationMethod: "no-cvm-required",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `authorizationCode`                                                                                                            | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A unique code provided by the cardholder’s bank to confirm that the transaction was successfully approved.                     | ...                                                                                                                            |
| `applicationIdentifier`                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The unique number that identifies a specific payment application on a chip card.                                               | ...                                                                                                                            |
| `cardReadMethod`                                                                                                               | [models.PaymentDetailsReceiptCardReadMethodResponse](../models/paymentdetailsreceiptcardreadmethodresponse.md)                 | :heavy_minus_sign:                                                                                                             | The method by which the card was read by the terminal.                                                                         | contactless                                                                                                                    |
| `cardVerificationMethod`                                                                                                       | [models.PaymentDetailsReceiptCardVerificationMethodResponse](../models/paymentdetailsreceiptcardverificationmethodresponse.md) | :heavy_minus_sign:                                                                                                             | The method used to verify the cardholder's identity.                                                                           | no-cvm-required                                                                                                                |
# Receipt

The Point of sale receipt object.

* `authorizationCode` _string|null_ - a unique code provided by the cardholder's bank to confirm that the
  transaction was successfully approved.
* `applicationIdentifier` _string|null_ - the unique number that identifies a specific payment application
  on a chip card.
* `cardReadMethod` _string|null_ - the method by which the card was read by the terminal. Possible values:
  `chip` | `magnetic-stripe` | `near-field-communication` | `contactless` | `moto`.
* `cardVerificationMethod` _string|null_ - the method used to verify the cardholder's identity. Possible
  values: `no-cvm-required` | `online-pin` | `offline-pin` | `consumer-device` | `signature` |
  `signature-and-online-pin` | `online-pin-and-signature` | `none` | `failed`.

## Example Usage

```typescript
import { Receipt } from "mollie-api-typescript/models";

let value: Receipt = {
  cardReadMethod: "contactless",
  cardVerificationMethod: "no-cvm-required",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `authorizationCode`                                                                                                            | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A unique code provided by the cardholder's bank to confirm that the transaction was successfully approved.                     | ...                                                                                                                            |
| `applicationIdentifier`                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The unique number that identifies a specific payment application on a chip card.                                               | ...                                                                                                                            |
| `cardReadMethod`                                                                                                               | [models.PaymentDetailsReceiptCardReadMethodResponse](../models/paymentdetailsreceiptcardreadmethodresponse.md)                 | :heavy_minus_sign:                                                                                                             | The method by which the card was read by the terminal.                                                                         | contactless                                                                                                                    |
| `cardVerificationMethod`                                                                                                       | [models.PaymentDetailsReceiptCardVerificationMethodResponse](../models/paymentdetailsreceiptcardverificationmethodresponse.md) | :heavy_minus_sign:                                                                                                             | The method used to verify the cardholder's identity.                                                                           | no-cvm-required                                                                                                                |
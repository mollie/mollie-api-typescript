# GetPaymentLinkPaymentsReceipt

The Point of sale receipt object.

## Example Usage

```typescript
import { GetPaymentLinkPaymentsReceipt } from "mollie-api-typescript/models/operations";

let value: GetPaymentLinkPaymentsReceipt = {
  cardReadMethod: "contactless",
  cardVerificationMethod: "no-cvm-required",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `authorizationCode`                                                                                                                | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A unique code provided by the cardholder’s bank to confirm that the transaction was successfully approved.                         | ...                                                                                                                                |
| `applicationIdentifier`                                                                                                            | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The unique number that identifies a specific payment application on a chip card.                                                   | ...                                                                                                                                |
| `cardReadMethod`                                                                                                                   | [operations.GetPaymentLinkPaymentsCardReadMethod](../../models/operations/getpaymentlinkpaymentscardreadmethod.md)                 | :heavy_minus_sign:                                                                                                                 | The method by which the card was read by the terminal.                                                                             | contactless                                                                                                                        |
| `cardVerificationMethod`                                                                                                           | [operations.GetPaymentLinkPaymentsCardVerificationMethod](../../models/operations/getpaymentlinkpaymentscardverificationmethod.md) | :heavy_minus_sign:                                                                                                                 | The method used to verify the cardholder's identity.                                                                               | no-cvm-required                                                                                                                    |
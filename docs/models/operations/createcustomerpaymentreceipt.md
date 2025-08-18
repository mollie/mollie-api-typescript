# CreateCustomerPaymentReceipt

The Point of sale receipt object.

## Example Usage

```typescript
import { CreateCustomerPaymentReceipt } from "mollie-api-typescript/models/operations";

let value: CreateCustomerPaymentReceipt = {
  cardReadMethod: "contactless",
  cardVerificationMethod: "no-cvm-required",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `authorizationCode`                                                                                                              | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | A unique code provided by the cardholder’s bank to confirm that the transaction was successfully approved.                       | ...                                                                                                                              |
| `applicationIdentifier`                                                                                                          | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The unique number that identifies a specific payment application on a chip card.                                                 | ...                                                                                                                              |
| `cardReadMethod`                                                                                                                 | [operations.CreateCustomerPaymentCardReadMethod](../../models/operations/createcustomerpaymentcardreadmethod.md)                 | :heavy_minus_sign:                                                                                                               | The method by which the card was read by the terminal.                                                                           | contactless                                                                                                                      |
| `cardVerificationMethod`                                                                                                         | [operations.CreateCustomerPaymentCardVerificationMethod](../../models/operations/createcustomerpaymentcardverificationmethod.md) | :heavy_minus_sign:                                                                                                               | The method used to verify the cardholder's identity.                                                                             | no-cvm-required                                                                                                                  |
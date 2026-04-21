# VerificationOfPayeeResponse

The Verification of Payee response object. Contains the result of verifying the creditor's
account holder name against the records held by the receiving bank.

## Example Usage

```typescript
import { VerificationOfPayeeResponse } from "mollie-api-typescript/models";

let value: VerificationOfPayeeResponse = {
  resource: "business-account-payee-verification",
  mode: "live",
  creditorBankAccount: {
    accountHolderName: "Jan Jansen",
    format: "iban",
    accountNumber: "NL02ABNA0123456789",
  },
  verificationResult: {
    outcome: "close-match",
    accountHolderName: "Jan Jansen",
  },
  createdAt: "2024-03-20T09:13:37+00:00",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                                                           | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Indicates the response contains a payee verification object. Will always contain the string<br/>`business-account-payee-verification` for this endpoint. | business-account-payee-verification                                                                                                                  |
| `mode`                                                                                                                                               | [models.Mode](../models/mode.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                   | Whether this entity was created in live mode or in test mode.                                                                                        | live                                                                                                                                                 |
| `creditorBankAccount`                                                                                                                                | [models.CreditorBankAccountResponse](../models/creditorbankaccountresponse.md)                                                                       | :heavy_check_mark:                                                                                                                                   | The bank account details of the creditor (recipient) for Verification of Payee.                                                                      |                                                                                                                                                      |
| `verificationResult`                                                                                                                                 | [models.VerificationOfPayeeResponseVerificationResult](../models/verificationofpayeeresponseverificationresult.md)                                   | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |                                                                                                                                                      |
| `createdAt`                                                                                                                                          | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.                                                | 2024-03-20T09:13:37+00:00                                                                                                                            |
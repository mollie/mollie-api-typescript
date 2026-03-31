# CreditorBankAccount

The bank account details of the creditor (recipient) for Verification of Payee.

## Example Usage

```typescript
import { CreditorBankAccount } from "mollie-api-typescript/models";

let value: CreditorBankAccount = {
  accountHolderName: "Jan Jansen",
  format: "iban",
  accountNumber: "NL02ABNA0123456789",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountHolderName`                                                          | *string*                                                                     | :heavy_check_mark:                                                           | The full name of the creditor account holder to verify against bank records. | Jan Jansen                                                                   |
| `format`                                                                     | [models.AccountNumberFormat](../models/accountnumberformat.md)               | :heavy_check_mark:                                                           | The format of the account number.                                            | iban                                                                         |
| `accountNumber`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | The bank account details of the creditor.                                    | NL02ABNA0123456789                                                           |
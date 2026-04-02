# AccountDetails

The account holder details and bank account information for the business account.

## Example Usage

```typescript
import { AccountDetails } from "mollie-api-typescript/models";

let value: AccountDetails = {
  accountHolderName: "Mollie B.V.",
  name: "Main Checking Account",
  currency: "EUR",
  iban: "NL02MLLE123456780",
  bic: "MLLENL2AXXX",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accountHolderName`                                          | *string*                                                     | :heavy_check_mark:                                           | The name of the account holder.                              | Mollie B.V.                                                  |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | A name of the account.                                       | Main Checking Account                                        |
| `currency`                                                   | *string*                                                     | :heavy_check_mark:                                           | The currency of the account in ISO 4217 format.              | EUR                                                          |
| `iban`                                                       | *string*                                                     | :heavy_check_mark:                                           | The IBAN (International Bank Account Number) of the account. | NL02MLLE123456780                                            |
| `bic`                                                        | *string*                                                     | :heavy_minus_sign:                                           | The BIC (Bank Identifier Code) of the account.               | MLLENL2AXXX                                                  |
# BusinessAccountResponse

## Example Usage

```typescript
import { BusinessAccountResponse } from "mollie-api-typescript/models";

let value: BusinessAccountResponse = {
  resource: "business-account",
  id: "ba_nopqrstuvwxyz23456789A",
  accountDetails: {
    accountHolderName: "Mollie B.V.",
    name: "Main Checking Account",
    currency: "EUR",
    iban: "NL02MLLE123456780",
    bic: "MLLENL2AXXX",
  },
  balance: {
    total: {
      currency: "EUR",
      value: "10.00",
    },
  },
  status: "active",
  mode: "live",
  createdAt: "2024-03-20T09:13:37+00:00",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                                      | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | Indicates the response contains a business account object. Will always contain the string `business-account`<br/>for this endpoint. | business-account                                                                                                                |
| `id`                                                                                                                            | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The identifier uniquely referring to this business account. Mollie assigns this identifier at account creation<br/>time.        | ba_nopqrstuvwxyz23456789A                                                                                                       |
| `accountDetails`                                                                                                                | [models.AccountDetails](../models/accountdetails.md)                                                                            | :heavy_check_mark:                                                                                                              | The account holder details and bank account information for the business account.                                               |                                                                                                                                 |
| `balance`                                                                                                                       | [models.Balance](../models/balance.md)                                                                                          | :heavy_check_mark:                                                                                                              | The balance of the business account.                                                                                            |                                                                                                                                 |
| `status`                                                                                                                        | [models.AccountStatus](../models/accountstatus.md)                                                                              | :heavy_check_mark:                                                                                                              | The status of the business account.                                                                                             | active                                                                                                                          |
| `mode`                                                                                                                          | [models.Mode](../models/mode.md)                                                                                                | :heavy_check_mark:                                                                                                              | Whether this entity was created in live mode or in test mode.                                                                   | live                                                                                                                            |
| `createdAt`                                                                                                                     | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.                           | 2024-03-20T09:13:37+00:00                                                                                                       |
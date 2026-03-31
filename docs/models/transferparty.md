# TransferParty

A party involved in the transfer, representing either the debtor (sender) or creditor (recipient).
Contains the party's name and account details.

## Example Usage

```typescript
import { TransferParty } from "mollie-api-typescript/models";

let value: TransferParty = {
  fullName: "Jan Jansen",
  account: {
    iban: "NL02ABNA0123456789",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `fullName`                                                       | *string*                                                         | :heavy_check_mark:                                               | The full name of the account holder.                             | Jan Jansen                                                       |
| `account`                                                        | [models.TransferPartyAccount](../models/transferpartyaccount.md) | :heavy_check_mark:                                               | The bank account details of the party.                           |                                                                  |
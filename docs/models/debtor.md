# Debtor

The debtor (sender) of the transfer, including their name and account details.

## Example Usage

```typescript
import { Debtor } from "mollie-api-typescript/models";

let value: Debtor = {
  fullName: "Jan Jansen",
  account: {
    iban: "NL02ABNA0123456789",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `fullName`                                                             | *string*                                                               | :heavy_check_mark:                                                     | The full name of the account holder.                                   | Jan Jansen                                                             |
| `account`                                                              | [models.TransferResponseAccount](../models/transferresponseaccount.md) | :heavy_check_mark:                                                     | The bank account details of the party.                                 |                                                                        |
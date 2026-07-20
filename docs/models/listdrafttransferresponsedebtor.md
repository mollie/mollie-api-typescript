# ListDraftTransferResponseDebtor

The debtor (sender) of the draft transfer, resolved from `debtorIban` at creation time.

## Example Usage

```typescript
import { ListDraftTransferResponseDebtor } from "mollie-api-typescript/models";

let value: ListDraftTransferResponseDebtor = {
  fullName: "Jan Jansen",
  account: {
    iban: "NL02ABNA0123456789",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `fullName`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | The full name of the account holder.                                                     | Jan Jansen                                                                               |
| `account`                                                                                | [models.ListDraftTransferResponseAccount](../models/listdrafttransferresponseaccount.md) | :heavy_check_mark:                                                                       | The bank account details of the party.                                                   |                                                                                          |
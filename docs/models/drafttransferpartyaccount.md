# DraftTransferPartyAccount

The bank account details of the party.

## Example Usage

```typescript
import { DraftTransferPartyAccount } from "mollie-api-typescript/models";

let value: DraftTransferPartyAccount = {
  iban: "NL02ABNA0123456789",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `iban`                                                              | *string*                                                            | :heavy_check_mark:                                                  | The IBAN (International Bank Account Number) of the account holder. | NL02ABNA0123456789                                                  |
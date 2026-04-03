# EntityUnmatchedCreditTransferSource

Details about the sender of the credit transfer.

## Example Usage

```typescript
import { EntityUnmatchedCreditTransferSource } from "mollie-api-typescript/models";

let value: EntityUnmatchedCreditTransferSource = {
  format: "iban",
  accountHolderName: "Jan Jansen",
  iban: "NL91ABNA0417164300",
  bic: "ABNANL2A",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `format`                                                               | *string*                                                               | :heavy_check_mark:                                                     | The format of the source account. Currently always `iban`.             | iban                                                                   |
| `accountHolderName`                                                    | *string*                                                               | :heavy_check_mark:                                                     | The name of the account holder who sent the unmatched credit transfer. | Jan Jansen                                                             |
| `iban`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The IBAN of the sender's bank account.                                 | NL91ABNA0417164300                                                     |
| `bic`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | The BIC of the sender's bank.                                          | ABNANL2A                                                               |
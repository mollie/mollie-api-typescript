# EntityBalanceTransferParty

A party involved in the balance transfer, either the sender or the receiver.

## Example Usage

```typescript
import { EntityBalanceTransferParty } from "mollie-api-typescript/models";

let value: EntityBalanceTransferParty = {
  type: "organization",
  id: "org_1234567",
  description: "Invoice fee",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [models.BalanceTransferPartyType](../models/balancetransferpartytype.md)                                                         | :heavy_check_mark:                                                                                                               | Defines the type of the party. At the moment, only `organization` is supported.                                                  | organization                                                                                                                     |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              | org_1234567                                                                                                                      |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The transfer description for the transfer party. This is the description that will appear in the financial reports of the party. | Invoice fee                                                                                                                      |
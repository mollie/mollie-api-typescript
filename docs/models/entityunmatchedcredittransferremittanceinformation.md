# EntityUnmatchedCreditTransferRemittanceInformation

Remittance information provided with the unmatched credit transfer.

## Example Usage

```typescript
import { EntityUnmatchedCreditTransferRemittanceInformation } from "mollie-api-typescript/models";

let value: EntityUnmatchedCreditTransferRemittanceInformation = {
  unstructured: "",
  references: {
    creditorReference: "RF33678094651239",
    endToEndId: "NOTPROVIDED",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `unstructured`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Unstructured remittance information, such as a free-text payment description.                          |                                                                                                        |
| `references`                                                                                           | [models.EntityUnmatchedCreditTransferReferences](../models/entityunmatchedcredittransferreferences.md) | :heavy_minus_sign:                                                                                     | Structured references provided with the unmatched credit transfer.                                     |                                                                                                        |
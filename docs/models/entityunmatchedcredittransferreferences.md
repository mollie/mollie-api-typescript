# EntityUnmatchedCreditTransferReferences

Structured references provided with the unmatched credit transfer.

## Example Usage

```typescript
import { EntityUnmatchedCreditTransferReferences } from "mollie-api-typescript/models";

let value: EntityUnmatchedCreditTransferReferences = {
  creditorReference: "RF33678094651239",
  endToEndId: "NOTPROVIDED",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `creditorReference`        | *string*                   | :heavy_minus_sign:         | The creditor reference.    | RF33678094651239           |
| `endToEndId`               | *string*                   | :heavy_minus_sign:         | The end-to-end identifier. | NOTPROVIDED                |
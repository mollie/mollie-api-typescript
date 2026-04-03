# UnmatchedCreditTransferActionResponseDetails

Additional details about the action.

## Example Usage

```typescript
import { UnmatchedCreditTransferActionResponseDetails } from "mollie-api-typescript/models";

let value: UnmatchedCreditTransferActionResponseDetails = {
  paymentIds: [
    "tr_5B8cwPMGnU",
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `paymentIds`                                                      | *string*[]                                                        | :heavy_minus_sign:                                                | The IDs of the payments matched to the unmatched credit transfer. |
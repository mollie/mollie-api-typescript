# UnmatchedCreditTransferMatchRequest

## Example Usage

```typescript
import { UnmatchedCreditTransferMatchRequest } from "mollie-api-typescript/models";

let value: UnmatchedCreditTransferMatchRequest = {
  paymentIds: [
    "tr_5B8cwPMGnU",
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `paymentIds`                                                            | *string*[]                                                              | :heavy_check_mark:                                                      | The IDs of the payments to match against the unmatched credit transfer. |
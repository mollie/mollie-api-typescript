# ListEntityUnmatchedCreditTransferLinks

Links to related resources.

## Example Usage

```typescript
import { ListEntityUnmatchedCreditTransferLinks } from "mollie-api-typescript/models";

let value: ListEntityUnmatchedCreditTransferLinks = {
  self: {
    href:
      "https://api.mollie.com/v2/unmatched-credit-transfers/uct_abcDEFghij123456789",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `self`                                                                                             | [models.ListEntityUnmatchedCreditTransferSelf](../models/listentityunmatchedcredittransferself.md) | :heavy_minus_sign:                                                                                 | The URL to this unmatched credit transfer.                                                         |
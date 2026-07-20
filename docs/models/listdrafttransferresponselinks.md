# ListDraftTransferResponseLinks

Links to related resources.

## Example Usage

```typescript
import { ListDraftTransferResponseLinks } from "mollie-api-typescript/models";

let value: ListDraftTransferResponseLinks = {
  self: {
    href:
      "https://api.mollie.com/v2/business-accounts/draft-transfers/badrt_87GByBuj4UCcUTEbs6aGJ",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `self`                                                                             | [models.ListDraftTransferResponseSelf](../models/listdrafttransferresponseself.md) | :heavy_check_mark:                                                                 | The URL to this draft transfer.                                                    |
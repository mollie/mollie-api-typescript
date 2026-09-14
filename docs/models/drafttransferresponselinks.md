# DraftTransferResponseLinks

Links to related resources.

## Example Usage

```typescript
import { DraftTransferResponseLinks } from "mollie-api-typescript/models";

let value: DraftTransferResponseLinks = {
  self: {
    href:
      "https://api.mollie.com/v2/business-accounts/draft-transfers/badrt_87GByBuj4UCcUTEbs6aGJ",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `self`                                                                     | [models.DraftTransferResponseSelf](../models/drafttransferresponseself.md) | :heavy_check_mark:                                                         | The URL to this draft transfer.                                            |
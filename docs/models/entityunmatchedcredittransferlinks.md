# EntityUnmatchedCreditTransferLinks

Links to related resources.

## Example Usage

```typescript
import { EntityUnmatchedCreditTransferLinks } from "mollie-api-typescript/models";

let value: EntityUnmatchedCreditTransferLinks = {
  self: {
    href:
      "https://api.mollie.com/v2/unmatched-credit-transfers/uct_abcDEFghij123456789",
    type: "application/hal+json",
  },
  documentation: {
    href: "https://docs.mollie.com/reference/get-unmatched-credit-transfer",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `self`                                                                                                       | [models.EntityUnmatchedCreditTransferSelf](../models/entityunmatchedcredittransferself.md)                   | :heavy_minus_sign:                                                                                           | The URL to this unmatched credit transfer.                                                                   |
| `documentation`                                                                                              | [models.EntityUnmatchedCreditTransferDocumentation](../models/entityunmatchedcredittransferdocumentation.md) | :heavy_minus_sign:                                                                                           | The URL to the documentation of this endpoint.                                                               |
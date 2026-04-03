# UnmatchedCreditTransferActionResponseLinks

Links to related resources.

## Example Usage

```typescript
import { UnmatchedCreditTransferActionResponseLinks } from "mollie-api-typescript/models";

let value: UnmatchedCreditTransferActionResponseLinks = {
  self: {
    href:
      "https://api.mollie.com/v2/unmatched-credit-transfers/uct_abcDEFghij123456789/match",
    type: "application/hal+json",
  },
  documentation: {
    href: "https://docs.mollie.com/reference/match-unmatched-credit-transfer",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                       | [models.UnmatchedCreditTransferActionResponseSelf](../models/unmatchedcredittransferactionresponseself.md)                   | :heavy_minus_sign:                                                                                                           | The URL to this action.                                                                                                      |
| `documentation`                                                                                                              | [models.UnmatchedCreditTransferActionResponseDocumentation](../models/unmatchedcredittransferactionresponsedocumentation.md) | :heavy_minus_sign:                                                                                                           | The URL to the documentation of this endpoint.                                                                               |
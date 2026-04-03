# UnmatchedCreditTransferActionResponse

## Example Usage

```typescript
import { UnmatchedCreditTransferActionResponse } from "mollie-api-typescript/models";

let value: UnmatchedCreditTransferActionResponse = {
  resource: "unmatched-credit-transfer-action",
  id: "uct-act_xyz789",
  unmatchedCreditTransferId: "uct_abcDEFghij123456789",
  action: "return",
  status: "pending",
  createdAt: "2024-03-20T09:13:37+00:00",
  details: {
    paymentIds: [
      "tr_5B8cwPMGnU",
    ],
  },
  links: {
    self: {
      href:
        "https://api.mollie.com/v2/unmatched-credit-transfers/uct_abcDEFghij123456789/match",
      type: "application/hal+json",
    },
    documentation: {
      href: "https://docs.mollie.com/reference/match-unmatched-credit-transfer",
      type: "text/html",
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The resource type of the object.                                                                                 | unmatched-credit-transfer-action                                                                                 |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The identifier uniquely referring to this unmatched credit transfer action.                                      | uct-act_xyz789                                                                                                   |
| `unmatchedCreditTransferId`                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The identifier of the unmatched credit transfer this action belongs to.                                          | uct_abcDEFghij123456789                                                                                          |
| `action`                                                                                                         | [models.Action](../models/action.md)                                                                             | :heavy_check_mark:                                                                                               | The action performed on the unmatched credit transfer.                                                           |                                                                                                                  |
| `status`                                                                                                         | [models.UnmatchedCreditTransferActionResponseStatus](../models/unmatchedcredittransferactionresponsestatus.md)   | :heavy_check_mark:                                                                                               | The current status of the action.                                                                                |                                                                                                                  |
| `createdAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.            | 2024-03-20T09:13:37+00:00                                                                                        |
| `details`                                                                                                        | [models.UnmatchedCreditTransferActionResponseDetails](../models/unmatchedcredittransferactionresponsedetails.md) | :heavy_minus_sign:                                                                                               | Additional details about the action.                                                                             |                                                                                                                  |
| `links`                                                                                                          | [models.UnmatchedCreditTransferActionResponseLinks](../models/unmatchedcredittransferactionresponselinks.md)     | :heavy_check_mark:                                                                                               | Links to related resources.                                                                                      |                                                                                                                  |
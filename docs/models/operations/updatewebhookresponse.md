# UpdateWebhookResponse

The webhook object.

## Example Usage

```typescript
import { UpdateWebhookResponse } from "mollie-api-typescript/models/operations";

let value: UpdateWebhookResponse = {
  resource: "webhook",
  id: "hook_tNP6fpF9fLJpFWziRcgiH",
  url: "https://example.com/webhook-endpoint",
  profileId: "pfl_YyoaNFjtHc",
  createdAt: "2023-03-15T10:00:00Z",
  name: "Profile Updates Webhook",
  eventTypes: [
    "*",
    "sales-invoice.paid",
  ],
  status: "enabled",
  mode: "live",
  links: {
    documentation: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Indicates the response contains a webhook subscription object.<br/>Will always contain the string `webhook` for this endpoint. | webhook                                                                                                                    |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The identifier uniquely referring to this subscription.                                                                    | hook_tNP6fpF9fLJpFWziRcgiH                                                                                                 |
| `url`                                                                                                                      | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The subscription's events destination.                                                                                     | https://example.com/webhook-endpoint                                                                                       |
| `profileId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The identifier uniquely referring to the profile that created the subscription.                                            | pfl_YyoaNFjtHc                                                                                                             |
| `createdAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The subscription's date time of creation.                                                                                  | 2023-03-15T10:00:00Z                                                                                                       |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The subscription's name.                                                                                                   | Profile Updates Webhook                                                                                                    |
| `eventTypes`                                                                                                               | [operations.UpdateWebhookEventTypeWebhookEventTypes](../../models/operations/updatewebhookeventtypewebhookeventtypes.md)[] | :heavy_check_mark:                                                                                                         | The events types that are subscribed.                                                                                      | [<br/>"profile.create",<br/>"profile.blocked"<br/>]                                                                        |
| `status`                                                                                                                   | [operations.UpdateWebhookStatus](../../models/operations/updatewebhookstatus.md)                                           | :heavy_check_mark:                                                                                                         | The subscription's current status.                                                                                         | enabled                                                                                                                    |
| `mode`                                                                                                                     | [operations.UpdateWebhookMode](../../models/operations/updatewebhookmode.md)                                               | :heavy_check_mark:                                                                                                         | Whether this entity was created in live mode or in test mode.                                                              | live                                                                                                                       |
| `links`                                                                                                                    | [operations.UpdateWebhookLinks](../../models/operations/updatewebhooklinks.md)                                             | :heavy_check_mark:                                                                                                         | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                          |                                                                                                                            |
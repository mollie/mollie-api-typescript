# ListWebhooksResponse

A list of webhooks. For a complete reference of the webhook object, refer to the [Get hook endpoint](get-webhook) documentation.

## Example Usage

```typescript
import { ListWebhooksResponse } from "mollie-api-typescript/models/operations";

let value: ListWebhooksResponse = {
  count: 5,
  embedded: {
    webhooks: [
      {
        id: "hook_tNP6fpF9fLJpFWziRcgiH",
        url: "https://example.com/webhook-endpoint",
        profileId: "pfl_YyoaNFjtHc",
        createdAt: "2023-03-15T10:00:00Z",
        name: "Profile Updates Webhook",
        eventTypes: [
          "profile.create",
          "profile.blocked",
        ],
        status: "enabled",
        mode: "live",
      },
    ],
  },
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    previous: {
      href: "https://...",
      type: "application/hal+json",
    },
    next: {
      href: "https://...",
      type: "application/hal+json",
    },
    documentation: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListWebhooksEmbedded](../../models/operations/listwebhooksembedded.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.ListWebhooksLinks](../../models/operations/listwebhookslinks.md)                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
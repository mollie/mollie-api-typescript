# ListWebhooksEmbedded

## Example Usage

```typescript
import { ListWebhooksEmbedded } from "mollie-api-typescript/models/operations";

let value: ListWebhooksEmbedded = {
  webhooks: [
    {
      resource: "webhook",
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
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `webhooks`                                                 | [operations.Webhook](../../models/operations/webhook.md)[] | :heavy_minus_sign:                                         | A list of webhooks.                                        |
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
        "*",
        "*",
      ],
      status: "enabled",
      mode: "live",
      links: {
        documentation: {
          href: "https://...",
          type: "application/hal+json",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `webhooks`                                              | [models.EntityWebhook](../../models/entitywebhook.md)[] | :heavy_check_mark:                                      | A list of webhooks.                                     |
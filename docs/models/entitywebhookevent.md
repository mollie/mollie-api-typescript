# EntityWebhookEvent

## Example Usage

```typescript
import { EntityWebhookEvent } from "mollie-api-typescript/models";

let value: EntityWebhookEvent = {
  resource: "event",
  id: "event_GvJ8WHrp5isUdRub9CJyH",
  webhookEventTypes: "payment-link.paid",
  entityId: "pl_qng5gbbv8NAZ5gpM5ZYgx",
  createdAt: "2024-06-10T14:23:45+00:00",
  embedded: {
    entity: {
      resource: "payout",
      id: "payout_j8NvRAM2WNZtsykpLEX8J",
      balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      description: "My payout description",
      status: "requested",
      statusReason: {
        code: "requested",
        message: "The payout has been requested.",
      },
      createdAt: "2024-03-20T09:13:37+00:00",
      initiatedAt: "2024-03-20T09:13:40+00:00",
      completedAt: "2024-03-20T14:00:00+00:00",
      canceledAt: null,
      mode: "live",
      links: {
        self: {
          href: "https://...",
          type: "application/hal+json",
        },
        documentation: {
          href: "https://...",
          type: "application/hal+json",
        },
      },
    },
  },
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    documentation: {
      href: "https://...",
      type: "application/hal+json",
    },
    entity: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Indicates the response contains a webhook event object. Will always contain the string `event` for this endpoint. | event                                                                                                             |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The identifier uniquely referring to this event.                                                                  | event_GvJ8WHrp5isUdRub9CJyH                                                                                       |
| `webhookEventTypes`                                                                                               | [models.EntityWebhookEventWebhookEventTypes](../models/entitywebhookeventwebhookeventtypes.md)                    | :heavy_check_mark:                                                                                                | N/A                                                                                                               | payment-link.paid                                                                                                 |
| `entityId`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The entity token that triggered the event                                                                         | pl_qng5gbbv8NAZ5gpM5ZYgx                                                                                          |
| `createdAt`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The event's date time of creation.                                                                                | 2024-06-10T14:23:45+00:00                                                                                         |
| `embedded`                                                                                                        | [models.Embedded](../models/embedded.md)                                                                          | :heavy_minus_sign:                                                                                                | Full payload of the event.                                                                                        |                                                                                                                   |
| `links`                                                                                                           | [models.EntityWebhookEventLinks](../models/entitywebhookeventlinks.md)                                            | :heavy_check_mark:                                                                                                | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                 |                                                                                                                   |
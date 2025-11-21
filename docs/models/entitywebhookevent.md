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
      resource: "profile",
      id: "pfl_QkEhN94Ba",
      mode: "live",
      name: "My website name",
      website: "https://example.com",
      email: "test@mollie.com",
      phone: "+31208202070",
      description: "My website description",
      countriesOfActivity: [
        "NL",
        "GB",
      ],
      businessCategory: "OTHER_MERCHANDISE",
      status: "unverified",
      review: {
        status: "pending",
      },
      createdAt: "2024-03-20T09:13:37+00:00",
      links: {
        self: {
          href: "https://...",
          type: "application/hal+json",
        },
        dashboard: {
          href:
            "https://www.mollie.com/dashboard/org_7049691/settings/profiles/pfl_2q3RyuMGry",
          type: "text/html",
        },
        chargebacks: {
          href:
            "https://api.mollie.com/v2/chargebacks?profileId=pfl_2q3RyuMGry",
          type: "application/hal+json",
        },
        methods: {
          href: "https://api.mollie.com/v2/methods?profileId=pfl_2q3RyuMGry",
          type: "application/hal+json",
        },
        payments: {
          href: "https://api.mollie.com/v2/payments?profileId=pfl_2q3RyuMGry",
          type: "application/hal+json",
        },
        refunds: {
          href: "https://api.mollie.com/v2/refunds?profileId=pfl_2q3RyuMGry",
          type: "application/hal+json",
        },
        checkoutPreviewUrl: {
          href: "https://www.mollie.com/checkout/preview/pfl_2q3RyuMGry",
          type: "text/html",
        },
        documentation: {
          href: "https://...",
          type: "text/html",
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
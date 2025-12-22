# ListAllSubscriptionsResponse

A list of subscription objects.

## Example Usage

```typescript
import { ListAllSubscriptionsResponse } from "mollie-api-typescript/models/operations";

let value: ListAllSubscriptionsResponse = {
  count: 5,
  embedded: {
    subscriptions: [
      {
        resource: "subscription",
        id: "sub_5B8cwPMGnU",
        mode: "live",
        status: "active",
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        times: 6,
        timesRemaining: 5,
        interval: "2 days",
        startDate: "2025-01-01",
        nextPaymentDate: "2025-01-01",
        description: "Subscription of streaming channel",
        method: "paypal",
        applicationFee: {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          description: "Platform fee",
        },
        metadata: "<value>",
        webhookUrl: "https://example.com/webhook",
        customerId: "cst_5B8cwPMGnU",
        mandateId: "mdt_5B8cwPMGnU",
        createdAt: "2024-03-20T09:13:37+00:00",
        canceledAt: "2025-01-01T13:10:19+00:00",
        links: {
          self: {
            href: "https://...",
            type: "application/hal+json",
          },
          customer: {
            href: "https://...",
            type: "application/hal+json",
          },
          mandate: {
            href: "https://...",
            type: "application/hal+json",
          },
          profile: {
            href: "https://...",
            type: "application/hal+json",
          },
          payments: {
            href: "https://...",
            type: "application/hal+json",
          },
        },
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
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListAllSubscriptionsEmbedded](../../models/operations/listallsubscriptionsembedded.md)                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
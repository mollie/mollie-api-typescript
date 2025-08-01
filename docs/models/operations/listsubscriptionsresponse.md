# ListSubscriptionsResponse

A list of subscription objects.

## Example Usage

```typescript
import { ListSubscriptionsResponse } from "mollie-api-typescript/models/operations";

let value: ListSubscriptionsResponse = {
  count: 5,
  embedded: {
    subscriptions: [
      {
        id: "sub_5B8cwPMGnU",
        mode: "live",
        status: "active",
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        times: 6,
        timesRemaining: 5,
        interval: "... days",
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
        webhookUrl: "https://example.com/webhook",
        customerId: "cst_5B8cwPMGnU",
        mandateId: "mdt_5B8cwPMGnU",
        createdAt: "2024-03-20T09:13:37.0Z",
        canceledAt: "2025-01-01T13:10:19.0Z",
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
          profile: null,
          payments: {
            href: "https://...",
            type: "application/hal+json",
          },
          documentation: {
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
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListSubscriptionsEmbedded](../../models/operations/listsubscriptionsembedded.md)                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.ListSubscriptionsLinks](../../models/operations/listsubscriptionslinks.md)                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
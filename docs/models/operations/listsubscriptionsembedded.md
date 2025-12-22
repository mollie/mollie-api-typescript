# ListSubscriptionsEmbedded

## Example Usage

```typescript
import { ListSubscriptionsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListSubscriptionsEmbedded = {
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
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `subscriptions`                                                               | [models.ListSubscriptionResponse](../../models/listsubscriptionresponse.md)[] | :heavy_minus_sign:                                                            | An array of subscription objects.                                             |
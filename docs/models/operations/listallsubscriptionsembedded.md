# ListAllSubscriptionsEmbedded

## Example Usage

```typescript
import { ListAllSubscriptionsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListAllSubscriptionsEmbedded = {
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
      interval: "... weeks",
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
      metadata: {
        "0": "<value 1>",
        "1": "<value 2>",
        "2": "<value 3>",
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
        profile: {
          href: "https://...",
          type: "application/hal+json",
        },
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `subscriptions`                                                                                              | [operations.ListAllSubscriptionsSubscription](../../models/operations/listallsubscriptionssubscription.md)[] | :heavy_minus_sign:                                                                                           | A list of subscription objects.                                                                              |
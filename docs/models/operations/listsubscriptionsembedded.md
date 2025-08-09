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
      metadata: "<value>",
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
        customer: null,
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `subscriptions`                                                                                        | [operations.ListSubscriptionsSubscription](../../models/operations/listsubscriptionssubscription.md)[] | :heavy_minus_sign:                                                                                     | An array of subscription objects.                                                                      |
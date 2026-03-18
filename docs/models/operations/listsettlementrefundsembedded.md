# ListSettlementRefundsEmbedded

## Example Usage

```typescript
import { ListSettlementRefundsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListSettlementRefundsEmbedded = {
  refunds: [
    {
      resource: "refund",
      id: "re_5B8cwPMGnU",
      mode: "live",
      description: "Refunding a Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      settlementAmount: {
        currency: "EUR",
        value: "10.00",
      },
      metadata: "<value>",
      paymentId: "tr_5B8cwPMGnU",
      settlementId: "stl_5B8cwPMGnU",
      status: "queued",
      createdAt: "2024-03-20T09:13:37+00:00",
      externalReference: {
        type: "acquirer-reference",
        id: "123456789012345",
      },
      routingReversals: null,
      links: {
        self: {
          href: "https://...",
          type: "application/hal+json",
        },
        payment: {
          href: "https://...",
          type: "application/hal+json",
        },
        settlement: {
          href: "https://...",
          type: "application/hal+json",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `refunds`                                                     | [models.ListEntityRefund](../../models/listentityrefund.md)[] | :heavy_check_mark:                                            | An array of refund objects.                                   |
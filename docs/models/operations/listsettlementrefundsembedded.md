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
      paymentId: "tr_5B8cwPMGnU",
      settlementId: "stl_5B8cwPMGnU",
      status: "queued",
      createdAt: "2024-03-20T09:13:37.0Z",
      externalReference: {
        type: "acquirer-reference",
        id: "123456789012345",
      },
      routingReversals: [
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          source: {
            organizationId: "org_1234567",
          },
        },
      ],
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `refunds`                                                                                          | [operations.ListSettlementRefundsRefund](../../models/operations/listsettlementrefundsrefund.md)[] | :heavy_minus_sign:                                                                                 | An array of refund objects.                                                                        |
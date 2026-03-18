# ListSettlementRefundsResponse

## Example Usage

```typescript
import { ListSettlementRefundsResponse } from "mollie-api-typescript/models/operations";

let value: ListSettlementRefundsResponse = {
  result: {
    count: 5,
    embedded: {
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
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [operations.ListSettlementRefundsResponseBody](../../models/operations/listsettlementrefundsresponsebody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
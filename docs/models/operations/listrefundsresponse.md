# ListRefundsResponse

A list of refund objects. For a complete reference of the refund object, refer to the [Get refund endpoint](get-refund) documentation.

## Example Usage

```typescript
import { ListRefundsResponse } from "mollie-api-typescript/models/operations";

let value: ListRefundsResponse = {
  count: 5,
  embedded: {
    refunds: [
      {
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
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListRefundsEmbedded](../../models/operations/listrefundsembedded.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.ListRefundsLinks](../../models/operations/listrefundslinks.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
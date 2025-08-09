# ListBalancesResponse

A list of balance objects. For a complete reference of the balance
object, refer to the [Get balance endpoint](get-balance) documentation.

## Example Usage

```typescript
import { ListBalancesResponse } from "mollie-api-typescript/models/operations";

let value: ListBalancesResponse = {
  count: 5,
  embedded: {
    balances: [
      {
        resource: "balance",
        id: "bal_gVMhHKqSSRYJyPsuoPNFH",
        mode: "live",
        createdAt: "2024-03-20T09:13:37.0Z",
        currency: "EUR",
        description: "Balance description",
        status: "active",
        transferFrequency: "daily",
        transferThreshold: {
          currency: "EUR",
          value: "10.00",
        },
        transferReference: "RF12-3456-7890-1234",
        transferDestination: null,
        availableAmount: {
          currency: "EUR",
          value: "10.00",
        },
        pendingAmount: {
          currency: "EUR",
          value: "10.00",
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
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListBalancesEmbedded](../../models/operations/listbalancesembedded.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.ListBalancesLinks](../../models/operations/listbalanceslinks.md)                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
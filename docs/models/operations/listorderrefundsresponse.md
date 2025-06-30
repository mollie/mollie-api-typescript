# ListOrderRefundsResponse

A list of refund objects. For a complete reference of the refund object, refer to the [Create order refund endpoint](create-order-refund) documentation.

## Example Usage

```typescript
import { ListOrderRefundsResponse } from "mollie-api-typescript/models/operations";

let value: ListOrderRefundsResponse = {
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
        orderId: "ord_5B8cwPMGnU",
        settlementId: "stl_5B8cwPMGnU",
        status: "queued",
        createdAt: "2024-03-20T09:13:37.0Z",
        externalReference: {
          type: "acquirer-reference",
          id: "123456789012345",
        },
        lines: [
          {
            id: "odl_5B8cwPMGnU",
            orderId: "ord_5B8cwPMGnU",
            name: "Chess Board",
            sku: "5702016116977",
            type: "physical",
            status: "created",
            isCancelable: false,
            quantity: 1,
            quantityShipped: 0,
            amountShipped: {
              currency: "EUR",
              value: "10.00",
            },
            quantityRefunded: 0,
            amountRefunded: {
              currency: "EUR",
              value: "10.00",
            },
            quantityCanceled: 0,
            amountCanceled: {
              currency: "EUR",
              value: "10.00",
            },
            shippableQuantity: 0,
            refundableQuantity: 0,
            cancelableQuantity: 0,
            unitPrice: {
              currency: "EUR",
              value: "10.00",
            },
            totalAmount: {
              currency: "EUR",
              value: "10.00",
            },
            vatRate: "21.00",
            vatAmount: {
              currency: "EUR",
              value: "10.00",
            },
            createdAt: "2025-03-28T16:42:12+00:00",
            discountedAmount: {
              currency: "EUR",
              value: "10.00",
            },
          },
        ],
        links: {
          self: {
            href: "https://...",
            type: "application/hal+json",
          },
          order: {
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
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListOrderRefundsEmbedded](../../models/operations/listorderrefundsembedded.md)                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.ListOrderRefundsLinks](../../models/operations/listorderrefundslinks.md)                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
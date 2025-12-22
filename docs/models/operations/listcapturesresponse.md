# ListCapturesResponse

A list of capture objects.

## Example Usage

```typescript
import { ListCapturesResponse } from "mollie-api-typescript/models/operations";

let value: ListCapturesResponse = {
  count: 5,
  embedded: {
    captures: [
      {
        resource: "capture",
        id: "cpt_vytxeTZskVKR7C7WgdSP3d",
        mode: "live",
        description: "Capture for cart #12345",
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        settlementAmount: {
          currency: "EUR",
          value: "10.00",
        },
        status: "succeeded",
        paymentId: "tr_5B8cwPMGnU",
        shipmentId: "shp_5x4xQJDWGNcY3tKGL7X5J",
        settlementId: "stl_5B8cwPMGnU",
        createdAt: "2024-03-20T09:13:37+00:00",
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
          shipment: {
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
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListCapturesEmbedded](../../models/operations/listcapturesembedded.md)                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
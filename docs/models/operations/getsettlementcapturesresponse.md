# GetSettlementCapturesResponse

A list of capture objects.

## Example Usage

```typescript
import { GetSettlementCapturesResponse } from "mollie-api-typescript/models/operations";

let value: GetSettlementCapturesResponse = {
  count: 5,
  embedded: {
    captures: [
      {
        resource: "capture",
        id: "cpt_vytxeTZskVKR7C7WgdSP3d",
        mode: "live",
        description: "Capture for cart #12345",
        amount: null,
        settlementAmount: {
          currency: "EUR",
          value: "10.00",
        },
        status: "succeeded",
        paymentId: "tr_5B8cwPMGnU",
        shipmentId: "shp_5x4xQJDWGNcY3tKGL7X5J",
        settlementId: "stl_5B8cwPMGnU",
        createdAt: "2024-03-20T09:13:37.0Z",
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
| `embedded`                                                                                                                                                                                                                                                                | [operations.GetSettlementCapturesEmbedded](../../models/operations/getsettlementcapturesembedded.md)                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.GetSettlementCapturesLinks](../../models/operations/getsettlementcaptureslinks.md)                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
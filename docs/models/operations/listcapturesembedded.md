# ListCapturesEmbedded

## Example Usage

```typescript
import { ListCapturesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListCapturesEmbedded = {
  captures: [
    {
      resource: "capture",
      id: "cpt_vytxeTZskVKR7C7WgdSP3d",
      mode: "live",
      description: "Capture for cart #12345",
      amount: null,
      settlementAmount: null,
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
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `captures`                                                                         | [operations.ListCapturesCapture](../../models/operations/listcapturescapture.md)[] | :heavy_minus_sign:                                                                 | An array of capture objects.                                                       |
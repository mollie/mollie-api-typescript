# GetSettlementCapturesEmbedded

## Example Usage

```typescript
import { GetSettlementCapturesEmbedded } from "mollie-api-typescript/models/operations";

let value: GetSettlementCapturesEmbedded = {
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
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `captures`                                                                                           | [operations.GetSettlementCapturesCapture](../../models/operations/getsettlementcapturescapture.md)[] | :heavy_minus_sign:                                                                                   | An array of capture objects.                                                                         |
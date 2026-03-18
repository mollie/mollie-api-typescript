# ListCapturesResponse

## Example Usage

```typescript
import { ListCapturesResponse } from "mollie-api-typescript/models/operations";

let value: ListCapturesResponse = {
  result: {
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
            settlement: null,
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
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.ListCapturesResponseBody](../../models/operations/listcapturesresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
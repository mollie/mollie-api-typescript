# Embedded

Full payload of the event.

## Example Usage

```typescript
import { Embedded } from "mollie-api-typescript/models";

let value: Embedded = {
  entity: {
    resource: "profile",
    id: "pfl_QkEhN94Ba",
    mode: "live",
    name: "My website name",
    website: "https://example.com",
    email: "test@mollie.com",
    phone: "+31208202070",
    description: "My website description",
    countriesOfActivity: [
      "NL",
      "GB",
    ],
    businessCategory: "OTHER_MERCHANDISE",
    status: "unverified",
    review: {
      status: "pending",
    },
    createdAt: "2024-03-20T09:13:37.0Z",
    links: {
      self: {
        href: "https://...",
        type: "application/hal+json",
      },
      dashboard: {
        href:
          "https://www.mollie.com/dashboard/org_7049691/settings/profiles/pfl_2q3RyuMGry",
        type: "text/html",
      },
      chargebacks: {
        href: "https://api.mollie.com/v2/chargebacks?profileId=pfl_2q3RyuMGry",
        type: "application/hal+json",
      },
      methods: {
        href: "https://api.mollie.com/v2/methods?profileId=pfl_2q3RyuMGry",
        type: "application/hal+json",
      },
      payments: {
        href: "https://api.mollie.com/v2/payments?profileId=pfl_2q3RyuMGry",
        type: "application/hal+json",
      },
      refunds: {
        href: "https://api.mollie.com/v2/refunds?profileId=pfl_2q3RyuMGry",
        type: "application/hal+json",
      },
      checkoutPreviewUrl: {
        href: "https://www.mollie.com/checkout/preview/pfl_2q3RyuMGry",
        type: "text/html",
      },
      documentation: {
        href: "https://...",
        type: "text/html",
      },
    },
  },
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `entity`           | *models.Entity*    | :heavy_minus_sign: | N/A                |
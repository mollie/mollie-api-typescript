# ClientOrganizationLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ClientOrganizationLinks } from "mollie-api-typescript/models/operations";

let value: ClientOrganizationLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  dashboard: {
    href: "https://...",
    type: "application/hal+json",
  },
  documentation: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                     | [operations.ClientOrganizationSelf](../../models/operations/clientorganizationself.md)                     | :heavy_minus_sign:                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                 |
| `dashboard`                                                                                                | [operations.ListClientsOrganizationDashboard](../../models/operations/listclientsorganizationdashboard.md) | :heavy_minus_sign:                                                                                         | Direct link to the organization's Mollie dashboard.                                                        |
| `documentation`                                                                                            | [operations.ClientOrganizationDocumentation](../../models/operations/clientorganizationdocumentation.md)   | :heavy_minus_sign:                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                 |
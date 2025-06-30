# GetOrganizationLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetOrganizationLinks } from "mollie-api-typescript/models/operations";

let value: GetOrganizationLinks = {
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `self`                                                                                             | [operations.GetOrganizationSelf](../../models/operations/getorganizationself.md)                   | :heavy_minus_sign:                                                                                 | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.         |
| `dashboard`                                                                                        | [operations.GetOrganizationDashboard](../../models/operations/getorganizationdashboard.md)         | :heavy_minus_sign:                                                                                 | Direct link to the organization's Mollie dashboard.                                                |
| `documentation`                                                                                    | [operations.GetOrganizationDocumentation](../../models/operations/getorganizationdocumentation.md) | :heavy_minus_sign:                                                                                 | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.         |
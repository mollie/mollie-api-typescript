# EntityCapabilityRequirementLinks

## Example Usage

```typescript
import { EntityCapabilityRequirementLinks } from "mollie-api-typescript/models";

let value: EntityCapabilityRequirementLinks = {
  dashboard: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `dashboard`                                                                                | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
# ListCapabilitiesLinks

## Example Usage

```typescript
import { ListCapabilitiesLinks } from "mollie-api-typescript/models/operations";

let value: ListCapabilitiesLinks = {
  documentation: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `documentation`                                                                            | [models.Url](../../models/url.md)                                                          | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
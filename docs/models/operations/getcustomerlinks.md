# GetCustomerLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetCustomerLinks } from "mollie-api-typescript/models/operations";

let value: GetCustomerLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  dashboard: {
    href: "https://...",
    type: "application/hal+json",
  },
  payments: {
    href: "https://...",
    type: "application/hal+json",
  },
  mandates: {
    href: "https://...",
    type: "application/hal+json",
  },
  subscriptions: {
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `self`                                                                                     | [models.Url](../../models/url.md)                                                          | :heavy_check_mark:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `dashboard`                                                                                | [models.Url](../../models/url.md)                                                          | :heavy_check_mark:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `payments`                                                                                 | [models.UrlNullable](../../models/urlnullable.md)                                          | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `mandates`                                                                                 | [models.UrlNullable](../../models/urlnullable.md)                                          | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `subscriptions`                                                                            | [models.UrlNullable](../../models/urlnullable.md)                                          | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `documentation`                                                                            | [models.Url](../../models/url.md)                                                          | :heavy_check_mark:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
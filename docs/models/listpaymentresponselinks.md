# ListPaymentResponseLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListPaymentResponseLinks } from "mollie-api-typescript/models";

let value: ListPaymentResponseLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  checkout: {
    href: "https://...",
    type: "application/hal+json",
  },
  mobileAppCheckout: {
    href: "https://...",
    type: "application/hal+json",
  },
  changePaymentState: {
    href: "https://...",
    type: "application/hal+json",
  },
  dashboard: {
    href: "https://...",
    type: "application/hal+json",
  },
  refunds: {
    href: "https://...",
    type: "application/hal+json",
  },
  chargebacks: {
    href: "https://...",
    type: "application/hal+json",
  },
  captures: {
    href: "https://...",
    type: "application/hal+json",
  },
  settlement: {
    href: "https://...",
    type: "application/hal+json",
  },
  customer: {
    href: "https://...",
    type: "application/hal+json",
  },
  mandate: {
    href: "https://...",
    type: "application/hal+json",
  },
  subscription: {
    href: "https://...",
    type: "application/hal+json",
  },
  order: {
    href: "https://...",
    type: "application/hal+json",
  },
  terminal: {
    href: "https://...",
    type: "application/hal+json",
  },
  status: {
    href: "https://...",
    type: "application/hal+json",
  },
  payOnline: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `self`                                                                                     | [models.Url](../models/url.md)                                                             | :heavy_check_mark:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `checkout`                                                                                 | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `mobileAppCheckout`                                                                        | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `changePaymentState`                                                                       | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `dashboard`                                                                                | [models.Url](../models/url.md)                                                             | :heavy_check_mark:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `refunds`                                                                                  | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `chargebacks`                                                                              | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `captures`                                                                                 | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `settlement`                                                                               | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `customer`                                                                                 | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `mandate`                                                                                  | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `subscription`                                                                             | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `order`                                                                                    | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `terminal`                                                                                 | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `status`                                                                                   | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `payOnline`                                                                                | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
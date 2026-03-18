# ListSalesInvoiceResponseLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListSalesInvoiceResponseLinks } from "mollie-api-typescript/models";

let value: ListSalesInvoiceResponseLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  invoicePayment: {
    href: "https://...",
    type: "application/hal+json",
  },
  pdfLink: {
    href: "https://...",
    type: "application/hal+json",
  },
  next: {
    href: "https://...",
    type: "application/hal+json",
  },
  previous: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `self`                                                                                     | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `invoicePayment`                                                                           | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `pdfLink`                                                                                  | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `next`                                                                                     | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `previous`                                                                                 | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
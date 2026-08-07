# SettlementConvenienceLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

This endpoint always points to your organization's current open or next settlement rather than one specific
settlement, so it doesn't return links to that settlement's payments, captures, refunds, chargebacks, or invoice.

## Example Usage

```typescript
import { SettlementConvenienceLinks } from "mollie-api-typescript/models";

let value: SettlementConvenienceLinks = {
  self: {
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
| `self`                                                                                     | [models.Url](../models/url.md)                                                             | :heavy_check_mark:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `documentation`                                                                            | [models.Url](../models/url.md)                                                             | :heavy_minus_sign:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
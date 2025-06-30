# GetPaymentLinkLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetPaymentLinkLinks } from "mollie-api-typescript/models/operations";

let value: GetPaymentLinkLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  paymentLink: {
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
| `self`                                                                                                     | [operations.GetPaymentLinkSelf](../../models/operations/getpaymentlinkself.md)                             | :heavy_minus_sign:                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                 |
| `paymentLink`                                                                                              | [operations.GetPaymentLinkPaymentLink](../../models/operations/getpaymentlinkpaymentlink.md)               | :heavy_minus_sign:                                                                                         | The URL your customer should visit to make the payment. This is where you should redirect the customer to. |
| `documentation`                                                                                            | [operations.GetPaymentLinkDocumentation](../../models/operations/getpaymentlinkdocumentation.md)           | :heavy_minus_sign:                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                 |
# UpdatePaymentLinkLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { UpdatePaymentLinkLinks } from "mollie-api-typescript/models/operations";

let value: UpdatePaymentLinkLinks = {
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
| `self`                                                                                                     | [operations.UpdatePaymentLinkSelf](../../models/operations/updatepaymentlinkself.md)                       | :heavy_minus_sign:                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                 |
| `paymentLink`                                                                                              | [operations.UpdatePaymentLinkPaymentLink](../../models/operations/updatepaymentlinkpaymentlink.md)         | :heavy_minus_sign:                                                                                         | The URL your customer should visit to make the payment. This is where you should redirect the customer to. |
| `documentation`                                                                                            | [operations.UpdatePaymentLinkDocumentation](../../models/operations/updatepaymentlinkdocumentation.md)     | :heavy_minus_sign:                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                 |
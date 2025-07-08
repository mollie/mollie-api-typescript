# CreatePaymentLinkLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { CreatePaymentLinkLinks } from "mollie-api-typescript/models/operations";

let value: CreatePaymentLinkLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  paymentLink: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                     | [operations.CreatePaymentLinkSelf](../../models/operations/createpaymentlinkself.md)                       | :heavy_check_mark:                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                 |
| `paymentLink`                                                                                              | [operations.CreatePaymentLinkPaymentLink](../../models/operations/createpaymentlinkpaymentlink.md)         | :heavy_check_mark:                                                                                         | The URL your customer should visit to make the payment. This is where you should redirect the customer to. |
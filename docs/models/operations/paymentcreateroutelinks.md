# PaymentCreateRouteLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { PaymentCreateRouteLinks } from "mollie-api-typescript/models/operations";

let value: PaymentCreateRouteLinks = {
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                   | [operations.PaymentCreateRouteSelf](../../models/operations/paymentcreaterouteself.md)                   | :heavy_minus_sign:                                                                                       | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.               |
| `documentation`                                                                                          | [operations.PaymentCreateRouteDocumentation](../../models/operations/paymentcreateroutedocumentation.md) | :heavy_minus_sign:                                                                                       | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.               |
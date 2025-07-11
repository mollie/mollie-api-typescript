# PaymentListRoutesLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { PaymentListRoutesLinks } from "mollie-api-typescript/models/operations";

let value: PaymentListRoutesLinks = {
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `self`                                                                                                 | [operations.PaymentListRoutesSelf](../../models/operations/paymentlistroutesself.md)                   | :heavy_minus_sign:                                                                                     | The URL to the current set of items.                                                                   |
| `documentation`                                                                                        | [operations.PaymentListRoutesDocumentation](../../models/operations/paymentlistroutesdocumentation.md) | :heavy_minus_sign:                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.             |
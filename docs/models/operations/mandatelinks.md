# MandateLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { MandateLinks } from "mollie-api-typescript/models/operations";

let value: MandateLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  customer: {
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
| `self`                                                                                     | [operations.MandateSelf](../../models/operations/mandateself.md)                           | :heavy_check_mark:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
| `customer`                                                                                 | [operations.ListMandatesCustomer](../../models/operations/listmandatescustomer.md)         | :heavy_check_mark:                                                                         | The API resource URL of the [customer](get-customer) that this mandate belongs to.         |
| `documentation`                                                                            | [operations.MandateDocumentation](../../models/operations/mandatedocumentation.md)         | :heavy_check_mark:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
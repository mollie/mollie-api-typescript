# CreateMandateLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { CreateMandateLinks } from "mollie-api-typescript/models/operations";

let value: CreateMandateLinks = {
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `self`                                                                                         | [operations.CreateMandateSelf](../../models/operations/createmandateself.md)                   | :heavy_minus_sign:                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.     |
| `customer`                                                                                     | [operations.CreateMandateCustomer](../../models/operations/createmandatecustomer.md)           | :heavy_minus_sign:                                                                             | The API resource URL of the [customer](get-customer) that this mandate belongs to.             |
| `documentation`                                                                                | [operations.CreateMandateDocumentation](../../models/operations/createmandatedocumentation.md) | :heavy_minus_sign:                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.     |
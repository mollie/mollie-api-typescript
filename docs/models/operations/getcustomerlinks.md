# GetCustomerLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetCustomerLinks } from "mollie-api-typescript/models/operations";

let value: GetCustomerLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  dashboard: {
    href: "https://...",
    type: "application/hal+json",
  },
  payments: {
    href: "https://...",
    type: "application/hal+json",
  },
  mandates: {
    href: "https://...",
    type: "application/hal+json",
  },
  subscriptions: {
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

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                                 | [operations.GetCustomerSelf](../../models/operations/getcustomerself.md)                                                               | :heavy_minus_sign:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
| `dashboard`                                                                                                                            | [operations.GetCustomerDashboard](../../models/operations/getcustomerdashboard.md)                                                     | :heavy_minus_sign:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
| `payments`                                                                                                                             | [operations.GetCustomerPayments](../../models/operations/getcustomerpayments.md)                                                       | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [payments](list-payments) linked to this customer. Omitted if no such payments exist (yet).                |
| `mandates`                                                                                                                             | [operations.GetCustomerMandates](../../models/operations/getcustomermandates.md)                                                       | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [mandates](list-mandates) linked to this customer. Omitted if no such mandates exist (yet).                |
| `subscriptions`                                                                                                                        | [operations.GetCustomerSubscriptions](../../models/operations/getcustomersubscriptions.md)                                             | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [subscriptions](list-subscriptions) linked to this customer. Omitted if no such subscriptions exist (yet). |
| `documentation`                                                                                                                        | [operations.GetCustomerDocumentation](../../models/operations/getcustomerdocumentation.md)                                             | :heavy_minus_sign:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
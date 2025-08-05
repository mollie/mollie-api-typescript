# CreateCustomerLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { CreateCustomerLinks } from "mollie-api-typescript/models/operations";

let value: CreateCustomerLinks = {
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
| `self`                                                                                                                                 | [operations.CreateCustomerSelf](../../models/operations/createcustomerself.md)                                                         | :heavy_check_mark:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
| `dashboard`                                                                                                                            | [operations.CreateCustomerDashboard](../../models/operations/createcustomerdashboard.md)                                               | :heavy_check_mark:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
| `payments`                                                                                                                             | [operations.CreateCustomerPayments](../../models/operations/createcustomerpayments.md)                                                 | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [payments](list-payments) linked to this customer. Omitted if no such payments<br/>exist (yet).            |
| `mandates`                                                                                                                             | [operations.CreateCustomerMandates](../../models/operations/createcustomermandates.md)                                                 | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [mandates](list-mandates) linked to this customer. Omitted if no such mandates<br/>exist (yet).            |
| `subscriptions`                                                                                                                        | [operations.CreateCustomerSubscriptions](../../models/operations/createcustomersubscriptions.md)                                       | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [subscriptions](list-subscriptions) linked to this customer. Omitted if no such<br/>subscriptions exist (yet). |
| `documentation`                                                                                                                        | [operations.CreateCustomerDocumentation](../../models/operations/createcustomerdocumentation.md)                                       | :heavy_check_mark:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
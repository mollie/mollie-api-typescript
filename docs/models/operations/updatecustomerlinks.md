# UpdateCustomerLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { UpdateCustomerLinks } from "mollie-api-typescript/models/operations";

let value: UpdateCustomerLinks = {
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
| `self`                                                                                                                                 | [operations.UpdateCustomerSelf](../../models/operations/updatecustomerself.md)                                                         | :heavy_minus_sign:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
| `dashboard`                                                                                                                            | [operations.UpdateCustomerDashboard](../../models/operations/updatecustomerdashboard.md)                                               | :heavy_minus_sign:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
| `payments`                                                                                                                             | [operations.UpdateCustomerPayments](../../models/operations/updatecustomerpayments.md)                                                 | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [payments](list-payments) linked to this customer. Omitted if no such payments exist (yet).                |
| `mandates`                                                                                                                             | [operations.UpdateCustomerMandates](../../models/operations/updatecustomermandates.md)                                                 | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [mandates](list-mandates) linked to this customer. Omitted if no such mandates exist (yet).                |
| `subscriptions`                                                                                                                        | [operations.UpdateCustomerSubscriptions](../../models/operations/updatecustomersubscriptions.md)                                       | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [subscriptions](list-subscriptions) linked to this customer. Omitted if no such subscriptions exist (yet). |
| `documentation`                                                                                                                        | [operations.UpdateCustomerDocumentation](../../models/operations/updatecustomerdocumentation.md)                                       | :heavy_minus_sign:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
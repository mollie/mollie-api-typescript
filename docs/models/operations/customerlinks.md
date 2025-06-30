# CustomerLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { CustomerLinks } from "mollie-api-typescript/models/operations";

let value: CustomerLinks = {
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
| `self`                                                                                                                                 | [operations.CustomerSelf](../../models/operations/customerself.md)                                                                     | :heavy_minus_sign:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
| `dashboard`                                                                                                                            | [operations.ListCustomersDashboard](../../models/operations/listcustomersdashboard.md)                                                 | :heavy_minus_sign:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
| `payments`                                                                                                                             | [operations.ListCustomersPayments](../../models/operations/listcustomerspayments.md)                                                   | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [payments](list-payments) linked to this customer. Omitted if no such payments exist (yet).                |
| `mandates`                                                                                                                             | [operations.ListCustomersMandates](../../models/operations/listcustomersmandates.md)                                                   | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [mandates](list-mandates) linked to this customer. Omitted if no such mandates exist (yet).                |
| `subscriptions`                                                                                                                        | [operations.ListCustomersSubscriptions](../../models/operations/listcustomerssubscriptions.md)                                         | :heavy_minus_sign:                                                                                                                     | The API resource URL of the [subscriptions](list-subscriptions) linked to this customer. Omitted if no such subscriptions exist (yet). |
| `documentation`                                                                                                                        | [operations.CustomerDocumentation](../../models/operations/customerdocumentation.md)                                                   | :heavy_minus_sign:                                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                             |
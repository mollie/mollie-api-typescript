# ListAllSubscriptionsSubscriptionLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListAllSubscriptionsSubscriptionLinks } from "mollie-api-typescript/models/operations";

let value: ListAllSubscriptionsSubscriptionLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  customer: {
    href: "https://...",
    type: "application/hal+json",
  },
  mandate: {
    href: "https://...",
    type: "application/hal+json",
  },
  profile: {
    href: "https://...",
    type: "application/hal+json",
  },
  payments: {
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `self`                                                                                                                               | [operations.ListAllSubscriptionsSubscriptionSelf](../../models/operations/listallsubscriptionssubscriptionself.md)                   | :heavy_check_mark:                                                                                                                   | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                           |
| `customer`                                                                                                                           | [operations.ListAllSubscriptionsCustomer](../../models/operations/listallsubscriptionscustomer.md)                                   | :heavy_check_mark:                                                                                                                   | The API resource URL of the [customer](get-customer) this subscription was created for.                                              |
| `mandate`                                                                                                                            | [operations.ListAllSubscriptionsMandate](../../models/operations/listallsubscriptionsmandate.md)                                     | :heavy_minus_sign:                                                                                                                   | The API resource URL of the [mandate](get-mandate) this subscription was created for.                                                |
| `profile`                                                                                                                            | [operations.ListAllSubscriptionsProfile](../../models/operations/listallsubscriptionsprofile.md)                                     | :heavy_check_mark:                                                                                                                   | The API resource URL of the [profile](get-profile) this subscription was created for.                                                |
| `payments`                                                                                                                           | [operations.ListAllSubscriptionsPayments](../../models/operations/listallsubscriptionspayments.md)                                   | :heavy_minus_sign:                                                                                                                   | The API resource URL of the [payments](list-payments) created for this subscription. Omitted if no such<br/>payments exist (yet).    |
| `documentation`                                                                                                                      | [operations.ListAllSubscriptionsSubscriptionDocumentation](../../models/operations/listallsubscriptionssubscriptiondocumentation.md) | :heavy_check_mark:                                                                                                                   | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                           |
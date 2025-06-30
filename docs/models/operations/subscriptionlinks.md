# SubscriptionLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { SubscriptionLinks } from "mollie-api-typescript/models/operations";

let value: SubscriptionLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  customer: null,
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                        | [operations.SubscriptionSelf](../../models/operations/subscriptionself.md)                                                    | :heavy_minus_sign:                                                                                                            | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                    |
| `customer`                                                                                                                    | [operations.ListSubscriptionsCustomer](../../models/operations/listsubscriptionscustomer.md)                                  | :heavy_minus_sign:                                                                                                            | The API resource URL of the [customer](get-customer) this subscription was created for.                                       |
| `mandate`                                                                                                                     | [operations.ListSubscriptionsMandate](../../models/operations/listsubscriptionsmandate.md)                                    | :heavy_minus_sign:                                                                                                            | The API resource URL of the [mandate](get-mandate) this subscription was created for.                                         |
| `profile`                                                                                                                     | [operations.ListSubscriptionsProfile](../../models/operations/listsubscriptionsprofile.md)                                    | :heavy_minus_sign:                                                                                                            | The API resource URL of the [profile](get-profile) this subscription was created for.                                         |
| `payments`                                                                                                                    | [operations.ListSubscriptionsPayments](../../models/operations/listsubscriptionspayments.md)                                  | :heavy_minus_sign:                                                                                                            | The API resource URL of the [payments](list-payments) created for this subscription. Omitted if no such payments exist (yet). |
| `documentation`                                                                                                               | [operations.SubscriptionDocumentation](../../models/operations/subscriptiondocumentation.md)                                  | :heavy_minus_sign:                                                                                                            | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                    |
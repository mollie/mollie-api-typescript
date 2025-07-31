# CancelSubscriptionLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { CancelSubscriptionLinks } from "mollie-api-typescript/models/operations";

let value: CancelSubscriptionLinks = {
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
| `self`                                                                                                                        | [operations.CancelSubscriptionSelf](../../models/operations/cancelsubscriptionself.md)                                        | :heavy_minus_sign:                                                                                                            | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                    |
| `customer`                                                                                                                    | [operations.CancelSubscriptionCustomer](../../models/operations/cancelsubscriptioncustomer.md)                                | :heavy_minus_sign:                                                                                                            | The API resource URL of the [customer](get-customer) this subscription was created for.                                       |
| `mandate`                                                                                                                     | [operations.CancelSubscriptionMandate](../../models/operations/cancelsubscriptionmandate.md)                                  | :heavy_minus_sign:                                                                                                            | The API resource URL of the [mandate](get-mandate) this subscription was created for.                                         |
| `profile`                                                                                                                     | [operations.CancelSubscriptionProfile](../../models/operations/cancelsubscriptionprofile.md)                                  | :heavy_minus_sign:                                                                                                            | The API resource URL of the [profile](get-profile) this subscription was created for.                                         |
| `payments`                                                                                                                    | [operations.CancelSubscriptionPayments](../../models/operations/cancelsubscriptionpayments.md)                                | :heavy_minus_sign:                                                                                                            | The API resource URL of the [payments](list-payments) created for this subscription. Omitted if no such<br/>payments exist (yet). |
| `documentation`                                                                                                               | [operations.CancelSubscriptionDocumentation](../../models/operations/cancelsubscriptiondocumentation.md)                      | :heavy_minus_sign:                                                                                                            | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                    |
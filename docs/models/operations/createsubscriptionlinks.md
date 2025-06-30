# CreateSubscriptionLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { CreateSubscriptionLinks } from "mollie-api-typescript/models/operations";

let value: CreateSubscriptionLinks = {
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                        | [operations.CreateSubscriptionSelf](../../models/operations/createsubscriptionself.md)                                        | :heavy_minus_sign:                                                                                                            | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                    |
| `customer`                                                                                                                    | [operations.CreateSubscriptionCustomer](../../models/operations/createsubscriptioncustomer.md)                                | :heavy_minus_sign:                                                                                                            | The API resource URL of the [customer](get-customer) this subscription was created for.                                       |
| `mandate`                                                                                                                     | [operations.CreateSubscriptionMandate](../../models/operations/createsubscriptionmandate.md)                                  | :heavy_minus_sign:                                                                                                            | The API resource URL of the [mandate](get-mandate) this subscription was created for.                                         |
| `profile`                                                                                                                     | [operations.CreateSubscriptionProfile](../../models/operations/createsubscriptionprofile.md)                                  | :heavy_minus_sign:                                                                                                            | The API resource URL of the [profile](get-profile) this subscription was created for.                                         |
| `payments`                                                                                                                    | [operations.CreateSubscriptionPayments](../../models/operations/createsubscriptionpayments.md)                                | :heavy_minus_sign:                                                                                                            | The API resource URL of the [payments](list-payments) created for this subscription. Omitted if no such payments exist (yet). |
| `documentation`                                                                                                               | [operations.CreateSubscriptionDocumentation](../../models/operations/createsubscriptiondocumentation.md)                      | :heavy_minus_sign:                                                                                                            | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                    |
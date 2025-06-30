# CreateCustomerPaymentRoutingLinksResponse

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { CreateCustomerPaymentRoutingLinksResponse } from "mollie-api-typescript/models/operations";

let value: CreateCustomerPaymentRoutingLinksResponse = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  payment: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                     | [operations.CreateCustomerPaymentRoutingSelfResponse](../../models/operations/createcustomerpaymentroutingselfresponse.md) | :heavy_check_mark:                                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                 |
| `payment`                                                                                                                  | [operations.CreateCustomerPaymentPaymentResponse](../../models/operations/createcustomerpaymentpaymentresponse.md)         | :heavy_check_mark:                                                                                                         | The API resource URL of the [payment](get-payment) that belong to this route.                                              |
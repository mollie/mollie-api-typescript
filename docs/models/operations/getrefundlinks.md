# GetRefundLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetRefundLinks } from "mollie-api-typescript/models/operations";

let value: GetRefundLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  payment: {
    href: "https://...",
    type: "application/hal+json",
  },
  settlement: {
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

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                      | [operations.GetRefundSelf](../../models/operations/getrefundself.md)                                                        | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
| `payment`                                                                                                                   | [operations.GetRefundPayment](../../models/operations/getrefundpayment.md)                                                  | :heavy_minus_sign:                                                                                                          | The API resource URL of the [payment](get-payment) that this refund belongs to.                                             |
| `settlement`                                                                                                                | [operations.GetRefundSettlement](../../models/operations/getrefundsettlement.md)                                            | :heavy_minus_sign:                                                                                                          | The API resource URL of the [settlement](get-settlement) this refund has been settled with. Not present if not yet settled. |
| `documentation`                                                                                                             | [operations.GetRefundDocumentation](../../models/operations/getrefunddocumentation.md)                                      | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
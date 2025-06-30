# CreateOrderRefundLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { CreateOrderRefundLinks } from "mollie-api-typescript/models/operations";

let value: CreateOrderRefundLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  order: {
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
| `self`                                                                                                                      | [operations.CreateOrderRefundSelf](../../models/operations/createorderrefundself.md)                                        | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
| `order`                                                                                                                     | [operations.CreateOrderRefundOrder](../../models/operations/createorderrefundorder.md)                                      | :heavy_minus_sign:                                                                                                          | The API resource URL of the [order](get-order) that this refund belongs to, if applicable.                                  |
| `settlement`                                                                                                                | [operations.CreateOrderRefundSettlement](../../models/operations/createorderrefundsettlement.md)                            | :heavy_minus_sign:                                                                                                          | The API resource URL of the [settlement](get-settlement) this refund has been settled with. Not present if not yet settled. |
| `documentation`                                                                                                             | [operations.CreateOrderRefundDocumentation](../../models/operations/createorderrefunddocumentation.md)                      | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
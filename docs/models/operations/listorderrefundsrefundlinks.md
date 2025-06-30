# ListOrderRefundsRefundLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListOrderRefundsRefundLinks } from "mollie-api-typescript/models/operations";

let value: ListOrderRefundsRefundLinks = {
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
| `self`                                                                                                                      | [operations.ListOrderRefundsRefundSelf](../../models/operations/listorderrefundsrefundself.md)                              | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
| `order`                                                                                                                     | [operations.ListOrderRefundsOrder](../../models/operations/listorderrefundsorder.md)                                        | :heavy_minus_sign:                                                                                                          | The API resource URL of the [order](get-order) that this refund belongs to, if applicable.                                  |
| `settlement`                                                                                                                | [operations.ListOrderRefundsSettlement](../../models/operations/listorderrefundssettlement.md)                              | :heavy_minus_sign:                                                                                                          | The API resource URL of the [settlement](get-settlement) this refund has been settled with. Not present if not yet settled. |
| `documentation`                                                                                                             | [operations.ListOrderRefundsRefundDocumentation](../../models/operations/listorderrefundsrefunddocumentation.md)            | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
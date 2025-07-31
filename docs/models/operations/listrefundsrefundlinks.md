# ListRefundsRefundLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListRefundsRefundLinks } from "mollie-api-typescript/models/operations";

let value: ListRefundsRefundLinks = {
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
| `self`                                                                                                                      | [operations.ListRefundsRefundSelf](../../models/operations/listrefundsrefundself.md)                                        | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
| `payment`                                                                                                                   | [operations.ListRefundsPayment](../../models/operations/listrefundspayment.md)                                              | :heavy_minus_sign:                                                                                                          | The API resource URL of the [payment](get-payment) that this refund belongs to.                                             |
| `settlement`                                                                                                                | [operations.ListRefundsSettlement](../../models/operations/listrefundssettlement.md)                                        | :heavy_minus_sign:                                                                                                          | The API resource URL of the [settlement](get-settlement) this refund has been settled with. Not present if not<br/>yet settled. |
| `documentation`                                                                                                             | [operations.ListRefundsRefundDocumentation](../../models/operations/listrefundsrefunddocumentation.md)                      | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
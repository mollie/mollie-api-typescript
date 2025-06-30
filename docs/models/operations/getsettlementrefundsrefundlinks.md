# GetSettlementRefundsRefundLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetSettlementRefundsRefundLinks } from "mollie-api-typescript/models/operations";

let value: GetSettlementRefundsRefundLinks = {
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
| `self`                                                                                                                      | [operations.GetSettlementRefundsRefundSelf](../../models/operations/getsettlementrefundsrefundself.md)                      | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
| `payment`                                                                                                                   | [operations.GetSettlementRefundsPayment](../../models/operations/getsettlementrefundspayment.md)                            | :heavy_minus_sign:                                                                                                          | The API resource URL of the [payment](get-payment) that this refund belongs to.                                             |
| `settlement`                                                                                                                | [operations.GetSettlementRefundsSettlement](../../models/operations/getsettlementrefundssettlement.md)                      | :heavy_minus_sign:                                                                                                          | The API resource URL of the [settlement](get-settlement) this refund has been settled with. Not present if not yet settled. |
| `documentation`                                                                                                             | [operations.GetSettlementRefundsRefundDocumentation](../../models/operations/getsettlementrefundsrefunddocumentation.md)    | :heavy_minus_sign:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
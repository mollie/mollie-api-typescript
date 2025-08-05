# ListSettlementRefundsRefundLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListSettlementRefundsRefundLinks } from "mollie-api-typescript/models/operations";

let value: ListSettlementRefundsRefundLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  payment: {
    href: "https://...",
    type: "application/hal+json",
  },
  settlement: null,
  documentation: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                      | [operations.ListSettlementRefundsRefundSelf](../../models/operations/listsettlementrefundsrefundself.md)                    | :heavy_check_mark:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
| `payment`                                                                                                                   | [operations.ListSettlementRefundsPayment](../../models/operations/listsettlementrefundspayment.md)                          | :heavy_check_mark:                                                                                                          | The API resource URL of the [payment](get-payment) that this refund belongs to.                                             |
| `settlement`                                                                                                                | [operations.ListSettlementRefundsSettlement](../../models/operations/listsettlementrefundssettlement.md)                    | :heavy_minus_sign:                                                                                                          | The API resource URL of the [settlement](get-settlement) this refund has been settled with. Not present if not<br/>yet settled. |
| `documentation`                                                                                                             | [operations.ListSettlementRefundsRefundDocumentation](../../models/operations/listsettlementrefundsrefunddocumentation.md)  | :heavy_check_mark:                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                  |
# ListSettlementChargebacksChargebackLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListSettlementChargebacksChargebackLinks } from "mollie-api-typescript/models/operations";

let value: ListSettlementChargebacksChargebackLinks = {
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

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `self`                                                                                                                                     | [operations.ListSettlementChargebacksChargebackSelf](../../models/operations/listsettlementchargebackschargebackself.md)                   | :heavy_check_mark:                                                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                 |
| `payment`                                                                                                                                  | [operations.ListSettlementChargebacksPayment](../../models/operations/listsettlementchargebackspayment.md)                                 | :heavy_check_mark:                                                                                                                         | The API resource URL of the [payment](get-payment) that this chargeback belongs to.                                                        |
| `settlement`                                                                                                                               | [operations.ListSettlementChargebacksSettlement](../../models/operations/listsettlementchargebackssettlement.md)                           | :heavy_minus_sign:                                                                                                                         | The API resource URL of the [settlement](get-settlement) this chargeback has been settled with. Not present if not yet settled.            |
| `documentation`                                                                                                                            | [operations.ListSettlementChargebacksChargebackDocumentation](../../models/operations/listsettlementchargebackschargebackdocumentation.md) | :heavy_check_mark:                                                                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                 |
# ListChargebacksChargebackLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListChargebacksChargebackLinks } from "mollie-api-typescript/models/operations";

let value: ListChargebacksChargebackLinks = {
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

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                          | [operations.ListChargebacksChargebackSelf](../../models/operations/listchargebackschargebackself.md)                            | :heavy_check_mark:                                                                                                              | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                      |
| `payment`                                                                                                                       | [operations.ListChargebacksPayment](../../models/operations/listchargebackspayment.md)                                          | :heavy_check_mark:                                                                                                              | The API resource URL of the [payment](get-payment) that this chargeback belongs to.                                             |
| `settlement`                                                                                                                    | [operations.ListChargebacksSettlement](../../models/operations/listchargebackssettlement.md)                                    | :heavy_minus_sign:                                                                                                              | The API resource URL of the [settlement](get-settlement) this chargeback has been settled with. Not present if not yet settled. |
| `documentation`                                                                                                                 | [operations.ListChargebacksChargebackDocumentation](../../models/operations/listchargebackschargebackdocumentation.md)          | :heavy_check_mark:                                                                                                              | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                      |
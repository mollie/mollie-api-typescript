# GetChargebackLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetChargebackLinks } from "mollie-api-typescript/models/operations";

let value: GetChargebackLinks = {
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
| `self`                                                                                                                          | [operations.GetChargebackSelf](../../models/operations/getchargebackself.md)                                                    | :heavy_check_mark:                                                                                                              | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                      |
| `payment`                                                                                                                       | [operations.GetChargebackPayment](../../models/operations/getchargebackpayment.md)                                              | :heavy_check_mark:                                                                                                              | The API resource URL of the [payment](get-payment) that this chargeback belongs to.                                             |
| `settlement`                                                                                                                    | [operations.GetChargebackSettlement](../../models/operations/getchargebacksettlement.md)                                        | :heavy_minus_sign:                                                                                                              | The API resource URL of the [settlement](get-settlement) this chargeback has been settled with. Not present if not yet settled. |
| `documentation`                                                                                                                 | [operations.GetChargebackDocumentation](../../models/operations/getchargebackdocumentation.md)                                  | :heavy_check_mark:                                                                                                              | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                      |
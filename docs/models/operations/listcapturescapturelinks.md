# ListCapturesCaptureLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListCapturesCaptureLinks } from "mollie-api-typescript/models/operations";

let value: ListCapturesCaptureLinks = {
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
  shipment: {
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

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                                    | [operations.ListCapturesCaptureSelf](../../models/operations/listcapturescaptureself.md)                                                  | :heavy_check_mark:                                                                                                                        | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                |
| `payment`                                                                                                                                 | [operations.ListCapturesPayment](../../models/operations/listcapturespayment.md)                                                          | :heavy_check_mark:                                                                                                                        | The API resource URL of the [payment](get-payment) that this capture belongs to.                                                          |
| `settlement`                                                                                                                              | [operations.ListCapturesSettlement](../../models/operations/listcapturessettlement.md)                                                    | :heavy_minus_sign:                                                                                                                        | The API resource URL of the [settlement](get-settlement) this capture has been settled with. Not present if<br/>not yet settled.          |
| `shipment`                                                                                                                                | [operations.ListCapturesShipment](../../models/operations/listcapturesshipment.md)                                                        | :heavy_minus_sign:                                                                                                                        | The API resource URL of the [shipment](get-shipment) this capture is associated with. Not present if<br/>it isn't associated with a shipment. |
| `documentation`                                                                                                                           | [operations.ListCapturesCaptureDocumentation](../../models/operations/listcapturescapturedocumentation.md)                                | :heavy_check_mark:                                                                                                                        | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                |
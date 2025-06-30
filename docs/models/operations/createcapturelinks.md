# CreateCaptureLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { CreateCaptureLinks } from "mollie-api-typescript/models/operations";

let value: CreateCaptureLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  payment: {
    href: "https://...",
    type: "application/hal+json",
  },
  settlement: null,
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
| `self`                                                                                                                                    | [operations.CreateCaptureSelf](../../models/operations/createcaptureself.md)                                                              | :heavy_check_mark:                                                                                                                        | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                |
| `payment`                                                                                                                                 | [operations.CreateCapturePayment](../../models/operations/createcapturepayment.md)                                                        | :heavy_check_mark:                                                                                                                        | The API resource URL of the [payment](get-payment) that this capture belongs to.                                                          |
| `settlement`                                                                                                                              | [operations.CreateCaptureSettlement](../../models/operations/createcapturesettlement.md)                                                  | :heavy_minus_sign:                                                                                                                        | The API resource URL of the [settlement](get-settlement) this capture has been settled with. Not present if not yet settled.              |
| `shipment`                                                                                                                                | [operations.CreateCaptureShipment](../../models/operations/createcaptureshipment.md)                                                      | :heavy_minus_sign:                                                                                                                        | The API resource URL of the [shipment](get-shipment) this capture is associated with. Not present if it isn't associated with a shipment. |
| `documentation`                                                                                                                           | [operations.CreateCaptureDocumentation](../../models/operations/createcapturedocumentation.md)                                            | :heavy_check_mark:                                                                                                                        | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                |
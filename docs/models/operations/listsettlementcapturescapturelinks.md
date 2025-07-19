# ListSettlementCapturesCaptureLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListSettlementCapturesCaptureLinks } from "mollie-api-typescript/models/operations";

let value: ListSettlementCapturesCaptureLinks = {
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
| `self`                                                                                                                                    | [operations.ListSettlementCapturesCaptureSelf](../../models/operations/listsettlementcapturescaptureself.md)                              | :heavy_check_mark:                                                                                                                        | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                |
| `payment`                                                                                                                                 | [operations.ListSettlementCapturesPayment](../../models/operations/listsettlementcapturespayment.md)                                      | :heavy_check_mark:                                                                                                                        | The API resource URL of the [payment](get-payment) that this capture belongs to.                                                          |
| `settlement`                                                                                                                              | [operations.ListSettlementCapturesSettlement](../../models/operations/listsettlementcapturessettlement.md)                                | :heavy_minus_sign:                                                                                                                        | The API resource URL of the [settlement](get-settlement) this capture has been settled with. Not present if not yet settled.              |
| `shipment`                                                                                                                                | [operations.ListSettlementCapturesShipment](../../models/operations/listsettlementcapturesshipment.md)                                    | :heavy_minus_sign:                                                                                                                        | The API resource URL of the [shipment](get-shipment) this capture is associated with. Not present if it isn't associated with a shipment. |
| `documentation`                                                                                                                           | [operations.ListSettlementCapturesCaptureDocumentation](../../models/operations/listsettlementcapturescapturedocumentation.md)            | :heavy_check_mark:                                                                                                                        | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                |
# ListSettlementCapturesShipment

The API resource URL of the [shipment](get-shipment) this capture is associated with. Not present if
it isn't associated with a shipment.

## Example Usage

```typescript
import { ListSettlementCapturesShipment } from "mollie-api-typescript/models/operations";

let value: ListSettlementCapturesShipment = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
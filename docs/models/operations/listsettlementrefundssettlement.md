# ListSettlementRefundsSettlement

The API resource URL of the [settlement](get-settlement) this refund has been settled with. Not present if not yet settled.

## Example Usage

```typescript
import { ListSettlementRefundsSettlement } from "mollie-api-typescript/models/operations";

let value: ListSettlementRefundsSettlement = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
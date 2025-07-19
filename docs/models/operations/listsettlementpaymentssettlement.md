# ListSettlementPaymentsSettlement

The API resource URL of the [settlement](get-settlement) this payment has been settled with. Not present if not yet settled.

## Example Usage

```typescript
import { ListSettlementPaymentsSettlement } from "mollie-api-typescript/models/operations";

let value: ListSettlementPaymentsSettlement = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
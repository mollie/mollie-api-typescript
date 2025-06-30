# GetNextSettlementChargebacks

The API resource URL of the [chargebacks](list-chargebacks) deducted from this settlement.

## Example Usage

```typescript
import { GetNextSettlementChargebacks } from "mollie-api-typescript/models/operations";

let value: GetNextSettlementChargebacks = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
# ListChargebacksSettlement

The API resource URL of the [settlement](get-settlement) this chargeback has been settled with. Not present if not yet settled.

## Example Usage

```typescript
import { ListChargebacksSettlement } from "mollie-api-typescript/models/operations";

let value: ListChargebacksSettlement = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
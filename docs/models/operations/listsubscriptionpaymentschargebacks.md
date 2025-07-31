# ListSubscriptionPaymentsChargebacks

The API resource URL of the [chargebacks](list-payment-chargebacks) that belong to this
payment.

## Example Usage

```typescript
import { ListSubscriptionPaymentsChargebacks } from "mollie-api-typescript/models/operations";

let value: ListSubscriptionPaymentsChargebacks = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
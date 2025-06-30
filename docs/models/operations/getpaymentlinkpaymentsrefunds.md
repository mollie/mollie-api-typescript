# GetPaymentLinkPaymentsRefunds

The API resource URL of the [refunds](list-payment-refunds) that belong to this payment.

## Example Usage

```typescript
import { GetPaymentLinkPaymentsRefunds } from "mollie-api-typescript/models/operations";

let value: GetPaymentLinkPaymentsRefunds = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
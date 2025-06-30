# GetPaymentMobileAppCheckout

The deeplink URL to the app of the payment method. Currently only available for `bancontact`.

## Example Usage

```typescript
import { GetPaymentMobileAppCheckout } from "mollie-api-typescript/models/operations";

let value: GetPaymentMobileAppCheckout = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
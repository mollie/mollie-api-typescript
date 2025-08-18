# GetPaymentLinkPaymentsLinksStatus

Link to customer-facing page showing the status of the bank transfer (to verify if the transaction was
successful).

## Example Usage

```typescript
import { GetPaymentLinkPaymentsLinksStatus } from "mollie-api-typescript/models/operations";

let value: GetPaymentLinkPaymentsLinksStatus = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
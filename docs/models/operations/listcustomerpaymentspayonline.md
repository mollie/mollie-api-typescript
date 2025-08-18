# ListCustomerPaymentsPayOnline

Link to Mollie Checkout page allowing customers to select a different payment method instead of legacy
bank transfer.

## Example Usage

```typescript
import { ListCustomerPaymentsPayOnline } from "mollie-api-typescript/models/operations";

let value: ListCustomerPaymentsPayOnline = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
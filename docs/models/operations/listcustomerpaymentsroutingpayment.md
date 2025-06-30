# ListCustomerPaymentsRoutingPayment

The API resource URL of the [payment](get-payment) that belong to this route.

## Example Usage

```typescript
import { ListCustomerPaymentsRoutingPayment } from "mollie-api-typescript/models/operations";

let value: ListCustomerPaymentsRoutingPayment = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
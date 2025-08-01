# CreateCustomerPaymentOrder

The API resource URL of the [order](get-order) this payment was created for. Not present if not created for an
order.

## Example Usage

```typescript
import { CreateCustomerPaymentOrder } from "mollie-api-typescript/models/operations";

let value: CreateCustomerPaymentOrder = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
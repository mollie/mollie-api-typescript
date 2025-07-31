# CreateSalesInvoiceInvoicePayment

The URL your customer should visit to make payment for the invoice. This is where you should redirect the
customer to unless the `status` is set to `paid`.

## Example Usage

```typescript
import { CreateSalesInvoiceInvoicePayment } from "mollie-api-typescript/models/operations";

let value: CreateSalesInvoiceInvoicePayment = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
# GetSalesInvoiceLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetSalesInvoiceLinks } from "mollie-api-typescript/models/operations";

let value: GetSalesInvoiceLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  invoicePayment: {
    href: "https://...",
    type: "application/hal+json",
  },
  pdfLink: {
    href: "https://...",
    type: "application/hal+json",
  },
  documentation: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                                                      | [operations.GetSalesInvoiceSelf](../../models/operations/getsalesinvoiceself.md)                                                                            | :heavy_minus_sign:                                                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                                  |
| `invoicePayment`                                                                                                                                            | [operations.GetSalesInvoiceInvoicePayment](../../models/operations/getsalesinvoiceinvoicepayment.md)                                                        | :heavy_minus_sign:                                                                                                                                          | The URL your customer should visit to make payment for the invoice. This is where you should redirect the customer to unless the `status` is set to `paid`. |
| `pdfLink`                                                                                                                                                   | [operations.GetSalesInvoicePdfLink](../../models/operations/getsalesinvoicepdflink.md)                                                                      | :heavy_minus_sign:                                                                                                                                          | The URL the invoice is available at, if generated.                                                                                                          |
| `documentation`                                                                                                                                             | [operations.GetSalesInvoiceDocumentation](../../models/operations/getsalesinvoicedocumentation.md)                                                          | :heavy_minus_sign:                                                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                                  |
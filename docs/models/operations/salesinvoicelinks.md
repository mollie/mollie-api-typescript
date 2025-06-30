# SalesInvoiceLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { SalesInvoiceLinks } from "mollie-api-typescript/models/operations";

let value: SalesInvoiceLinks = {
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
| `self`                                                                                                                                                      | [operations.SalesInvoiceSelf](../../models/operations/salesinvoiceself.md)                                                                                  | :heavy_minus_sign:                                                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                                  |
| `invoicePayment`                                                                                                                                            | [operations.ListSalesInvoicesInvoicePayment](../../models/operations/listsalesinvoicesinvoicepayment.md)                                                    | :heavy_minus_sign:                                                                                                                                          | The URL your customer should visit to make payment for the invoice. This is where you should redirect the customer to unless the `status` is set to `paid`. |
| `pdfLink`                                                                                                                                                   | [operations.ListSalesInvoicesPdfLink](../../models/operations/listsalesinvoicespdflink.md)                                                                  | :heavy_minus_sign:                                                                                                                                          | The URL the invoice is available at, if generated.                                                                                                          |
| `documentation`                                                                                                                                             | [operations.SalesInvoiceDocumentation](../../models/operations/salesinvoicedocumentation.md)                                                                | :heavy_minus_sign:                                                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                                  |
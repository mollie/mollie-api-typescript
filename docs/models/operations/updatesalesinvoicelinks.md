# UpdateSalesInvoiceLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { UpdateSalesInvoiceLinks } from "mollie-api-typescript/models/operations";

let value: UpdateSalesInvoiceLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  invoicePayment: {
    href: "https://...",
    type: "application/hal+json",
  },
  pdfLink: null,
  documentation: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                                                      | [operations.UpdateSalesInvoiceSelf](../../models/operations/updatesalesinvoiceself.md)                                                                      | :heavy_minus_sign:                                                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                                  |
| `invoicePayment`                                                                                                                                            | [operations.UpdateSalesInvoiceInvoicePayment](../../models/operations/updatesalesinvoiceinvoicepayment.md)                                                  | :heavy_minus_sign:                                                                                                                                          | The URL your customer should visit to make payment for the invoice. This is where you should redirect the<br/>customer to unless the `status` is set to `paid`. |
| `pdfLink`                                                                                                                                                   | [operations.UpdateSalesInvoicePdfLink](../../models/operations/updatesalesinvoicepdflink.md)                                                                | :heavy_minus_sign:                                                                                                                                          | The URL the invoice is available at, if generated.                                                                                                          |
| `documentation`                                                                                                                                             | [operations.UpdateSalesInvoiceDocumentation](../../models/operations/updatesalesinvoicedocumentation.md)                                                    | :heavy_minus_sign:                                                                                                                                          | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                                  |
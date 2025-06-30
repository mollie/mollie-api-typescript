# GetInvoiceLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetInvoiceLinks } from "mollie-api-typescript/models/operations";

let value: GetInvoiceLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  pdf: {
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `self`                                                                                   | [operations.GetInvoiceSelf](../../models/operations/getinvoiceself.md)                   | :heavy_minus_sign:                                                                       | URL to the current invoice resource.                                                     |
| `pdf`                                                                                    | [operations.Pdf](../../models/operations/pdf.md)                                         | :heavy_minus_sign:                                                                       | URL to a downloadable PDF of the invoice.                                                |
| `documentation`                                                                          | [operations.GetInvoiceDocumentation](../../models/operations/getinvoicedocumentation.md) | :heavy_minus_sign:                                                                       | URL to the API documentation.                                                            |
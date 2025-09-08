# EntityInvoice

## Example Usage

```typescript
import { EntityInvoice } from "mollie-api-typescript/models";

let value: EntityInvoice = {
  resource: "invoice",
  netAmount: {
    currency: "EUR",
    value: "10.00",
  },
  vatAmount: {
    currency: "EUR",
    value: "10.00",
  },
  grossAmount: {
    currency: "EUR",
    value: "10.00",
  },
  lines: [
    {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
    },
  ],
  links: {
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
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Indicates that the response contains an invoice object.<br/>Will always contain the string `invoice` for this endpoint. | invoice                                                                                                             |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The identifier uniquely referring to this invoice. Example: `inv_FrvewDA3Pr`.                                       |                                                                                                                     |
| `reference`                                                                                                         | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The reference number of the invoice. An example value would be: `2024.10000`.                                       |                                                                                                                     |
| `vatNumber`                                                                                                         | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The VAT number to which the invoice was issued to, if applicable.                                                   |                                                                                                                     |
| `status`                                                                                                            | [models.InvoiceStatus](../models/invoicestatus.md)                                                                  | :heavy_minus_sign:                                                                                                  | Status of the invoice.                                                                                              |                                                                                                                     |
| `netAmount`                                                                                                         | [models.Amount](../models/amount.md)                                                                                | :heavy_minus_sign:                                                                                                  | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                   |                                                                                                                     |
| `vatAmount`                                                                                                         | [models.Amount](../models/amount.md)                                                                                | :heavy_minus_sign:                                                                                                  | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                   |                                                                                                                     |
| `grossAmount`                                                                                                       | [models.Amount](../models/amount.md)                                                                                | :heavy_minus_sign:                                                                                                  | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                   |                                                                                                                     |
| `lines`                                                                                                             | [models.EntityInvoiceLine](../models/entityinvoiceline.md)[]                                                        | :heavy_minus_sign:                                                                                                  | The collection of products which make up the invoice.                                                               |                                                                                                                     |
| `issuedAt`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The invoice date in `YYYY-MM-DD` format.                                                                            |                                                                                                                     |
| `paidAt`                                                                                                            | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The date on which the invoice was paid, if applicable, in `YYYY-MM-DD` format.                                      |                                                                                                                     |
| `dueAt`                                                                                                             | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The date on which the invoice is due, if applicable, in `YYYY-MM-DD` format.                                        |                                                                                                                     |
| `links`                                                                                                             | [models.EntityInvoiceLinks](../models/entityinvoicelinks.md)                                                        | :heavy_minus_sign:                                                                                                  | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                   |                                                                                                                     |
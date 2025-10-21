# EntityInvoice

## Example Usage

```typescript
import { EntityInvoice } from "mollie-api-typescript/models";

let value: EntityInvoice = {
  resource: "invoice",
  id: "inv_aHbjjdrUdm",
  reference: "2024.10000",
  vatNumber: "NL123456789B01",
  status: "open",
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
      period: "2024-01",
      description: "Product #1",
      count: 3,
      vatPercentage: 21,
      amount: {
        currency: "EUR",
        value: "10.00",
      },
    },
  ],
  issuedAt: "2024-01-15",
  paidAt: "2024-01-20",
  dueAt: "2024-01-30",
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
| `resource`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Indicates that the response contains an invoice object.<br/>Will always contain the string `invoice` for this endpoint. | invoice                                                                                                             |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 | inv_aHbjjdrUdm                                                                                                      |
| `reference`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The reference number of the invoice. An example value would be: `2024.10000`.                                       | 2024.10000                                                                                                          |
| `vatNumber`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The VAT number to which the invoice was issued to, if applicable.                                                   | NL123456789B01                                                                                                      |
| `status`                                                                                                            | [models.InvoiceStatus](../models/invoicestatus.md)                                                                  | :heavy_check_mark:                                                                                                  | Status of the invoice.                                                                                              | open                                                                                                                |
| `netAmount`                                                                                                         | [models.Amount](../models/amount.md)                                                                                | :heavy_check_mark:                                                                                                  | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                   |                                                                                                                     |
| `vatAmount`                                                                                                         | [models.Amount](../models/amount.md)                                                                                | :heavy_check_mark:                                                                                                  | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                   |                                                                                                                     |
| `grossAmount`                                                                                                       | [models.Amount](../models/amount.md)                                                                                | :heavy_check_mark:                                                                                                  | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                   |                                                                                                                     |
| `lines`                                                                                                             | [models.EntityInvoiceLine](../models/entityinvoiceline.md)[]                                                        | :heavy_check_mark:                                                                                                  | The collection of products which make up the invoice.                                                               |                                                                                                                     |
| `issuedAt`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The invoice date in `YYYY-MM-DD` format.                                                                            | 2024-01-15                                                                                                          |
| `paidAt`                                                                                                            | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The date on which the invoice was paid, if applicable, in `YYYY-MM-DD` format.                                      | 2024-01-20                                                                                                          |
| `dueAt`                                                                                                             | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The date on which the invoice is due, if applicable, in `YYYY-MM-DD` format.                                        | 2024-01-30                                                                                                          |
| `links`                                                                                                             | [models.EntityInvoiceLinks](../models/entityinvoicelinks.md)                                                        | :heavy_check_mark:                                                                                                  | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                   |                                                                                                                     |
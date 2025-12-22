# ListInvoicesEmbedded

## Example Usage

```typescript
import { ListInvoicesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListInvoicesEmbedded = {
  invoices: [
    {
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
      lines: [],
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
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `invoices`                                                                                                                                   | [models.ListEntityInvoice](../../models/listentityinvoice.md)[]                                                                              | :heavy_check_mark:                                                                                                                           | An array of invoice objects. For a complete reference of<br/>the invoice object, refer to the [Get invoice endpoint](get-invoice) documentation. |
# ListSalesInvoicesResponse

A list of sales invoice objects. For a complete reference of the sales invoice object, refer to the
[Get sales invoice endpoint](get-sales-invoice) documentation.

## Example Usage

```typescript
import { ListSalesInvoicesResponse } from "mollie-api-typescript/models/operations";

let value: ListSalesInvoicesResponse = {
  count: 5,
  embedded: {
    salesInvoices: [
      {
        resource: "sales-invoice",
        id: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
        mode: "live",
        invoiceNumber: "INV-0000001",
        status: "draft",
        vatScheme: "standard",
        vatMode: "exclusive",
        memo: "This is a memo!",
        paymentTerm: "30 days",
        paymentDetails: {
          source: "payment-link",
          sourceReference: "pl_d9fQur83kFdhH8hIhaZfq",
        },
        emailDetails: null,
        customerId: "cst_8wmqcHMN4U",
        mandateId: "mdt_pWUnw6pkBN",
        recipientIdentifier: "customer-xyz-0123",
        recipient: {
          type: "consumer",
          title: "Mrs.",
          givenName: "Jane",
          familyName: "Doe",
          organizationName: "Organization Corp.",
          organizationNumber: "12345678",
          vatNumber: "NL123456789B01",
          email: "example@email.com",
          phone: "+0123456789",
          streetAndNumber: "Keizersgracht 126",
          streetAdditional: "4th floor",
          postalCode: "5678AB",
          city: "Amsterdam",
          region: "Noord-Holland",
          country: "NL",
          locale: "nl_NL",
        },
        lines: [
          {
            description: "LEGO 4440 Forest Police Station",
            quantity: 1,
            vatRate: "21.00",
            unitPrice: {
              currency: "EUR",
              value: "10.00",
            },
            discount: {
              type: "amount",
              value: "10.00",
            },
          },
        ],
        discount: null,
        amountDue: {
          currency: "EUR",
          value: "10.00",
        },
        subtotalAmount: {
          currency: "EUR",
          value: "10.00",
        },
        totalAmount: {
          currency: "EUR",
          value: "10.00",
        },
        totalVatAmount: {
          currency: "EUR",
          value: "10.00",
        },
        discountedSubtotalAmount: {
          currency: "EUR",
          value: "10.00",
        },
        createdAt: "2024-03-20T09:13:37+00:00",
        issuedAt: "2024-10-03T10:47:38+00:00",
        paidAt: "2024-10-04T10:47:38+00:00",
        dueAt: "2024-11-01T10:47:38+00:00",
        links: {
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
          next: {
            href: "https://...",
            type: "application/hal+json",
          },
          previous: {
            href: "https://...",
            type: "application/hal+json",
          },
        },
      },
    ],
  },
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    previous: {
      href: "https://...",
      type: "application/hal+json",
    },
    next: {
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

| Field                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListSalesInvoicesEmbedded](../../models/operations/listsalesinvoicesembedded.md)                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
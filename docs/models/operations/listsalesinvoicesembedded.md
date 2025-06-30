# ListSalesInvoicesEmbedded

## Example Usage

```typescript
import { ListSalesInvoicesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListSalesInvoicesEmbedded = {
  salesInvoices: [
    {
      id: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
      invoiceNumber: "INV-0000001",
      status: "draft",
      memo: "This is a memo!",
      paymentDetails: null,
      emailDetails: {
        subject: "Your invoice is available",
        body: "Please find your invoice enclosed.",
      },
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
      createdAt: "2024-03-20T09:13:37.0Z",
      issuedAt: "2024-10-03T10:47:38.457381+00:00",
      dueAt: "2024-11-01T10:47:38.457381+00:00",
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
        documentation: {
          href: "https://...",
          type: "application/hal+json",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `salesInvoices`                                                                                                                                                      | [operations.SalesInvoice](../../models/operations/salesinvoice.md)[]                                                                                                 | :heavy_minus_sign:                                                                                                                                                   | An array of sales invoice objects. For a complete reference of the sales invoice object, refer to the [Get sales invoice endpoint](get-sales-invoice) documentation. |
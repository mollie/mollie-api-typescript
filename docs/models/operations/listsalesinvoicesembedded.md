# ListSalesInvoicesEmbedded

## Example Usage

```typescript
import { ListSalesInvoicesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListSalesInvoicesEmbedded = {
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
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `salesInvoices`                                                                                                                                                      | [models.ListSalesInvoiceResponse](../../models/listsalesinvoiceresponse.md)[]                                                                                        | :heavy_minus_sign:                                                                                                                                                   | An array of sales invoice objects. For a complete reference of the sales invoice object, refer to<br/>the [Get sales invoice endpoint](get-sales-invoice) documentation. |
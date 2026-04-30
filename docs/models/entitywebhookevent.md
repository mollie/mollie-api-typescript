# EntityWebhookEvent

## Example Usage

```typescript
import { EntityWebhookEvent } from "mollie-api-typescript/models";

let value: EntityWebhookEvent = {
  resource: "event",
  id: "event_GvJ8WHrp5isUdRub9CJyH",
  webhookEventTypes: "payment-link.paid",
  entityId: "pl_qng5gbbv8NAZ5gpM5ZYgx",
  createdAt: "2024-06-10T14:23:45+00:00",
  embedded: {
    entity: {
      resource: "sales-invoice",
      id: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
      mode: "live",
      invoiceNumber: "INV-0000001",
      profileId: "pfl_QkEhN94Ba",
      status: "draft",
      vatScheme: "standard",
      vatMode: "exclusive",
      memo: "This is a memo!",
      paymentTerm: "30 days",
      paymentDetails: [
        {
          source: "payment-link",
          sourceReference: "pl_d9fQur83kFdhH8hIhaZfq",
        },
      ],
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
      discount: {
        type: "amount",
        value: "10.00",
      },
      isEInvoice: false,
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
        documentation: {
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
  },
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    documentation: {
      href: "https://...",
      type: "application/hal+json",
    },
    entity: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Indicates the response contains a webhook event object. Will always contain the string `event` for this endpoint. | event                                                                                                             |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The identifier uniquely referring to this event.                                                                  | event_GvJ8WHrp5isUdRub9CJyH                                                                                       |
| `webhookEventTypes`                                                                                               | [models.EntityWebhookEventWebhookEventTypes](../models/entitywebhookeventwebhookeventtypes.md)                    | :heavy_check_mark:                                                                                                | N/A                                                                                                               | payment-link.paid                                                                                                 |
| `entityId`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The entity token that triggered the event                                                                         | pl_qng5gbbv8NAZ5gpM5ZYgx                                                                                          |
| `createdAt`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The event's date time of creation.                                                                                | 2024-06-10T14:23:45+00:00                                                                                         |
| `embedded`                                                                                                        | [models.Embedded](../models/embedded.md)                                                                          | :heavy_minus_sign:                                                                                                | Full payload of the event.                                                                                        |                                                                                                                   |
| `links`                                                                                                           | [models.EntityWebhookEventLinks](../models/entitywebhookeventlinks.md)                                            | :heavy_check_mark:                                                                                                | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                 |                                                                                                                   |
# ListPaymentLinksResponse

A list of payment link objects.

## Example Usage

```typescript
import { ListPaymentLinksResponse } from "mollie-api-typescript/models/operations";

let value: ListPaymentLinksResponse = {
  count: 5,
  embedded: {
    paymentLinks: [
      {
        resource: "payment-link",
        id: "pl_d9fQur83kFdhH8hIhaZfq",
        mode: "live",
        description: "Chess Board",
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        minimumAmount: {
          currency: "EUR",
          value: "10.00",
        },
        archived: false,
        redirectUrl: "https://webshop.example.org/payment-links/redirect/",
        webhookUrl: "https://webshop.example.org/payment-links/webhook/",
        lines: [
          {
            type: "physical",
            description: "LEGO 4440 Forest Police Station",
            quantity: 1,
            quantityUnit: "pcs",
            unitPrice: {
              currency: "EUR",
              value: "10.00",
            },
            discountAmount: {
              currency: "EUR",
              value: "10.00",
            },
            totalAmount: {
              currency: "EUR",
              value: "10.00",
            },
            vatRate: "21.00",
            vatAmount: {
              currency: "EUR",
              value: "10.00",
            },
            sku: "9780241661628",
            categories: [
              "meal",
              "eco",
            ],
            imageUrl: "https://...",
            productUrl: "https://...",
          },
        ],
        billingAddress: {
          title: "Mr.",
          givenName: "Piet",
          familyName: "Mondriaan",
          organizationName: "Mollie B.V.",
          streetAndNumber: "Keizersgracht 126",
          streetAdditional: "Apt. 1",
          postalCode: "1234AB",
          email: "piet@example.org",
          phone: "31208202070",
          city: "Amsterdam",
          region: "Noord-Holland",
          country: "NL",
        },
        shippingAddress: {
          title: "Mr.",
          givenName: "Piet",
          familyName: "Mondriaan",
          organizationName: "Mollie B.V.",
          streetAndNumber: "Keizersgracht 126",
          streetAdditional: "Apt. 1",
          postalCode: "1234AB",
          email: "piet@example.org",
          phone: "31208202070",
          city: "Amsterdam",
          region: "Noord-Holland",
          country: "NL",
        },
        profileId: "pfl_QkEhN94Ba",
        reusable: false,
        createdAt: "2024-03-20T09:13:37+00:00",
        paidAt: "2025-12-24T11:00:16+00:00",
        expiresAt: "2025-12-24T11:00:16+00:00",
        allowedMethods: [
          "ideal",
        ],
        applicationFee: {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          description: "Platform fee",
        },
        sequenceType: "oneoff",
        customerId: "cst_XimFHuaEzd",
        links: {
          self: {
            href: "https://...",
            type: "application/hal+json",
          },
          paymentLink: {
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
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListPaymentLinksEmbedded](../../models/operations/listpaymentlinksembedded.md)                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
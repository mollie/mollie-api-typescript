# GetWebhookEventEmbedded

Full payload of the event.

## Example Usage

```typescript
import { GetWebhookEventEmbedded } from "mollie-api-typescript/models/operations";

let value: GetWebhookEventEmbedded = {
  entity: {
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
    createdAt: "2024-03-20T09:13:37.0Z",
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
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `entity`            | *operations.Entity* | :heavy_minus_sign:  | N/A                 |
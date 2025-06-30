# GetWebhookEventResponse

The webhook event object.

## Example Usage

```typescript
import { GetWebhookEventResponse } from "mollie-api-typescript/models/operations";

let value: GetWebhookEventResponse = {
  id: "event_GvJ8WHrp5isUdRub9CJyH",
  type: "payment-link.paid",
  entityId: "pl_qng5gbbv8NAZ5gpM5ZYgx",
  createdAt: "2024-06-10T14:23:45Z",
  embedded: {
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
        documentation: {
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
| `resource`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Indicates the response contains a webhook event object. Will always contain the string `event` for this endpoint. |                                                                                                                   |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The identifier uniquely referring to this event.                                                                  | event_GvJ8WHrp5isUdRub9CJyH                                                                                       |
| `type`                                                                                                            | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The event's type.                                                                                                 | payment-link.paid                                                                                                 |
| `entityId`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The entity token that triggered the event                                                                         | pl_qng5gbbv8NAZ5gpM5ZYgx                                                                                          |
| `createdAt`                                                                                                       | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The event's date time of creation.                                                                                | 2024-06-10T14:23:45Z                                                                                              |
| `embedded`                                                                                                        | [operations.GetWebhookEventEmbedded](../../models/operations/getwebhookeventembedded.md)                          | :heavy_minus_sign:                                                                                                | Full payload of the event.                                                                                        |                                                                                                                   |
| `links`                                                                                                           | [operations.GetWebhookEventLinks](../../models/operations/getwebhookeventlinks.md)                                | :heavy_minus_sign:                                                                                                | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                 |                                                                                                                   |
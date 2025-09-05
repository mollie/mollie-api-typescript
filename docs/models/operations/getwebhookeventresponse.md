# GetWebhookEventResponse

The webhook event object.

## Example Usage

```typescript
import { GetWebhookEventResponse } from "mollie-api-typescript/models/operations";

let value: GetWebhookEventResponse = {
  resource: "event",
  id: "event_GvJ8WHrp5isUdRub9CJyH",
  webhookEventTypes: "payment-link.paid",
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
| `webhookEventTypes`                                                                                               | [operations.GetWebhookEventWebhookEventTypes](../../models/operations/getwebhookeventwebhookeventtypes.md)        | :heavy_check_mark:                                                                                                | The event's type                                                                                                  | payment-link.paid                                                                                                 |
| `entityId`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The entity token that triggered the event                                                                         | pl_qng5gbbv8NAZ5gpM5ZYgx                                                                                          |
| `createdAt`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The event's date time of creation.                                                                                | 2024-06-10T14:23:45Z                                                                                              |
| `embedded`                                                                                                        | [operations.GetWebhookEventEmbedded](../../models/operations/getwebhookeventembedded.md)                          | :heavy_minus_sign:                                                                                                | Full payload of the event.                                                                                        |                                                                                                                   |
| `links`                                                                                                           | [operations.GetWebhookEventLinks](../../models/operations/getwebhookeventlinks.md)                                | :heavy_check_mark:                                                                                                | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                 |                                                                                                                   |
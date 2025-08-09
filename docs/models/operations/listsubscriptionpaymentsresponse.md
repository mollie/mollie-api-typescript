# ListSubscriptionPaymentsResponse

A list of payment objects.

## Example Usage

```typescript
import { ListSubscriptionPaymentsResponse } from "mollie-api-typescript/models/operations";

let value: ListSubscriptionPaymentsResponse = {
  count: 5,
  embedded: {
    payments: [
      {
        resource: "payment",
        id: "tr_5B8cwPMGnU",
        mode: "live",
        description: "Chess Board",
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        amountRefunded: {
          currency: "EUR",
          value: "10.00",
        },
        amountRemaining: {
          currency: "EUR",
          value: "10.00",
        },
        amountCaptured: {
          currency: "EUR",
          value: "10.00",
        },
        amountChargedBack: {
          currency: "EUR",
          value: "10.00",
        },
        settlementAmount: {
          currency: "EUR",
          value: "10.00",
        },
        redirectUrl: "https://example.org/redirect",
        cancelUrl: "https://example.org/cancel",
        webhookUrl: "https://example.org/webhooks",
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
            recurring: {
              description: "Gym subscription",
              interval: "... months",
              amount: {
                currency: "EUR",
                value: "10.00",
              },
              times: 1,
              startDate: "2024-12-12",
            },
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
        locale: "en_US",
        countryCode: "BE",
        method: "ideal",
        restrictPaymentMethodsToCountry: "NL",
        captureMode: "manual",
        captureDelay: "8 hours",
        captureBefore: "2024-03-20T09:28:37.0Z",
        applicationFee: {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          description: "10",
        },
        routing: null,
        sequenceType: "oneoff",
        subscriptionId: "sub_5B8cwPMGnU",
        mandateId: "mdt_5B8cwPMGnU",
        customerId: "cst_5B8cwPMGnU",
        profileId: "pfl_5B8cwPMGnU",
        settlementId: "stl_5B8cwPMGnU",
        orderId: "ord_5B8cwPMGnU",
        status: "open",
        statusReason: {
          code: "insufficient_funds",
          message:
            "The account associated with the card has insufficient funds. The shopper should use another payment method or\n"
            + "contact their bank.",
        },
        isCancelable: true,
        createdAt: "2024-03-20T09:13:37.0Z",
        authorizedAt: "2024-03-20T09:28:37.0Z",
        paidAt: "2024-03-20T09:28:37.0Z",
        canceledAt: "2024-03-20T09:28:37.0Z",
        expiresAt: "2024-03-20T09:28:37.0Z",
        expiredAt: "2024-03-20T09:28:37.0Z",
        failedAt: "2024-03-20T09:28:37.0Z",
        links: {
          self: {
            href: "https://...",
            type: "application/hal+json",
          },
          checkout: {
            href: "https://...",
            type: "application/hal+json",
          },
          mobileAppCheckout: {
            href: "https://...",
            type: "application/hal+json",
          },
          changePaymentState: {
            href: "https://...",
            type: "application/hal+json",
          },
          dashboard: {
            href: "https://...",
            type: "application/hal+json",
          },
          refunds: {
            href: "https://...",
            type: "application/hal+json",
          },
          chargebacks: {
            href: "https://...",
            type: "application/hal+json",
          },
          captures: {
            href: "https://...",
            type: "application/hal+json",
          },
          settlement: {
            href: "https://...",
            type: "application/hal+json",
          },
          customer: {
            href: "https://...",
            type: "application/hal+json",
          },
          mandate: {
            href: "https://...",
            type: "application/hal+json",
          },
          subscription: {
            href: "https://...",
            type: "application/hal+json",
          },
          order: {
            href: "https://...",
            type: "application/hal+json",
          },
          terminal: {
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
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListSubscriptionPaymentsEmbedded](../../models/operations/listsubscriptionpaymentsembedded.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.ListSubscriptionPaymentsLinks](../../models/operations/listsubscriptionpaymentslinks.md)                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
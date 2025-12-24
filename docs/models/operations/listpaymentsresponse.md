# ListPaymentsResponse

A list of payment objects.

## Example Usage

```typescript
import { ListPaymentsResponse } from "mollie-api-typescript/models/operations";
import { RFCDate } from "mollie-api-typescript/types";

let value: ListPaymentsResponse = {
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
              interval: "12 months",
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
        captureBefore: "2024-03-20T09:28:37+00:00",
        applicationFee: {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          description: "10",
        },
        routing: [
          {
            resource: "route",
            id: "rt_5B8cwPMGnU",
            mode: "live",
            amount: {
              currency: "EUR",
              value: "10.00",
            },
            destination: {
              type: "organization",
              organizationId: "org_1234567",
            },
            createdAt: "2024-12-12T10:00:00+00:00",
            releaseDate: "2024-12-12",
            links: {
              self: {
                href: "https://...",
                type: "application/hal+json",
              },
              payment: {
                href: "https://...",
                type: "application/hal+json",
              },
            },
          },
        ],
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
            "The account associated with the card has insufficient funds. The shopper should use another payment method or\ncontact their bank.",
        },
        isCancelable: true,
        details: {
          consumerName: "John Doe",
          consumerAccount: "NL91ABNA0417164300",
          consumerBic: "ABNANL2A",
          cardNumber: "************1234",
          bankName: "Mollie Bank",
          bankAccount: "NL91ABNA0417164300",
          bankBic: "ABNANL2A",
          cardHolder: "John Doe",
          cardAudition: "consumer",
          cardLabel: "Mastercard",
          cardCountryCode: "NL",
          cardExpiryDate: "12/25",
          cardFunding: "credit",
          cardSecurity: "normal",
          feeRegion: "maestro",
          failureReason: "card_declined",
          failureMessage: "Your card was declined.",
          wallet: "applepay",
          sellerProtection: "Eligible",
          paypalFee: {
            currency: "EUR",
            value: "10.00",
          },
          terminalId: "term_12345",
          receipt: {
            cardReadMethod: "contactless",
            cardVerificationMethod: "no-cvm-required",
          },
          dueDate: new RFCDate("2025-01-01"),
          signatureDate: new RFCDate("2024-03-20"),
          qrCode: {
            height: 300,
            width: 300,
            src: "https://www.mollie.com/images/qr-code.png",
          },
          remainderAmount: {
            currency: "EUR",
            value: "10.00",
          },
          remainderMethod: "creditcard",
          multibancoReference: "123456789",
          multibancoEntity: "98765",
        },
        createdAt: "2024-03-20T09:13:37+00:00",
        authorizedAt: "2024-03-20T09:28:37+00:00",
        paidAt: "2024-03-20T09:28:37+00:00",
        canceledAt: "2024-03-20T09:28:37+00:00",
        expiresAt: "2024-03-20T09:28:37+00:00",
        expiredAt: "2024-03-20T09:28:37+00:00",
        failedAt: "2024-03-20T09:28:37+00:00",
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
          status: {
            href: "https://...",
            type: "application/hal+json",
          },
          payOnline: {
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
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListPaymentsEmbedded](../../models/operations/listpaymentsembedded.md)                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
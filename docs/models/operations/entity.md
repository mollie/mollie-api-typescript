# Entity


## Supported Types

### `operations.GetWebhookEventPaymentLink`

```typescript
const value: operations.GetWebhookEventPaymentLink = {
  id: "pl_d9fQur83kFdhH8hIhaZfq",
  mode: "live",
  description: "Chess Board",
  amount: null,
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
};
```

### `operations.GetWebhookEventProfile`

```typescript
const value: operations.GetWebhookEventProfile = {
  id: "pfl_QkEhN94Ba",
  mode: "live",
  name: "My website name",
  website: "https://example.com",
  email: "test@mollie.com",
  phone: "+31208202070",
  description: "My website description",
  countriesOfActivity: [
    "NL",
    "GB",
  ],
  businessCategory: "OTHER_MERCHANDISE",
  status: "unverified",
  review: {
    status: "pending",
  },
  createdAt: "2022-01-19T12:30:22+00:00",
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    dashboard: {
      href:
        "https://www.mollie.com/dashboard/org_7049691/settings/profiles/pfl_2q3RyuMGry",
      type: "text/html",
    },
    chargebacks: {
      href: "https://api.mollie.com/v2/chargebacks?profileId=pfl_2q3RyuMGry",
      type: "application/hal+json",
    },
    methods: {
      href: "https://api.mollie.com/v2/methods?profileId=pfl_2q3RyuMGry",
      type: "application/hal+json",
    },
    payments: {
      href: "https://api.mollie.com/v2/payments?profileId=pfl_2q3RyuMGry",
      type: "application/hal+json",
    },
    refunds: {
      href: "https://api.mollie.com/v2/refunds?profileId=pfl_2q3RyuMGry",
      type: "application/hal+json",
    },
    checkoutPreviewUrl: {
      href: "https://www.mollie.com/checkout/preview/pfl_2q3RyuMGry",
      type: "text/html",
    },
    documentation: {
      href: "https://...",
      type: "text/html",
    },
  },
};
```


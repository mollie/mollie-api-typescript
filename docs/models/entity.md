# Entity


## Supported Types

### `models.PaymentLinkResponse`

```typescript
const value: models.PaymentLinkResponse = {
  resource: "payment-link",
  id: "pl_d9fQur83kFdhH8hIhaZfq",
  mode: "live",
  description: "Chess Board",
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  minimumAmount: null,
  archived: false,
  redirectUrl: "https://webshop.example.org/payment-links/redirect/",
  webhookUrl: "https://webshop.example.org/payment-links/webhook/",
  lines: null,
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
};
```

### `models.ProfileResponse`

```typescript
const value: models.ProfileResponse = {
  resource: "profile",
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
  createdAt: "2024-03-20T09:13:37+00:00",
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


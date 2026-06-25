# Entity


## Supported Types

### `models.PaymentResponse`

```typescript
const value: models.PaymentResponse = {
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
  statusReason: null,
  isCancelable: true,
  details: {
    consumerName: "John Doe",
    consumerAccount: "NL91ABNA0417164300",
    consumerBic: "ABNANL2A",
    cardNumber: "************1234",
    bankName: "Mollie Bank",
    bankAccount: "NL91ABNA0417164300",
    bankBic: "ABNANL2A",
    bizumReference: "2901tq2ure1d",
    cardHolder: "John Doe",
    cardAudience: "consumer",
    cardLabel: "Mastercard",
    cardCountryCode: "NL",
    cardExpiryDate: "12/25",
    cardFunding: "credit",
    cardSecurity: "normal",
    feeRegion: "maestro",
    failureReason: "card_declined",
    failureMessage: "Your card was declined.",
    wallet: "applepay",
    multibancoReference: "123456789",
    multibancoEntity: "98765",
    sellerProtection: "ELIGIBLE",
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
    documentation: {
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
};
```

### `models.EntityRefundResponse`

```typescript
const value: models.EntityRefundResponse = {
  resource: "refund",
  id: "re_5B8cwPMGnU",
  mode: "live",
  description: "Refunding a Chess Board",
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  metadata: "<value>",
  paymentId: "tr_5B8cwPMGnU",
  settlementId: "stl_5B8cwPMGnU",
  status: "queued",
  createdAt: "2024-03-20T09:13:37+00:00",
  externalReference: {
    type: "acquirer-reference",
    id: "123456789012345",
  },
  routingReversals: [
    {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      source: {
        organizationId: "org_1234567",
      },
    },
  ],
  links: {
    self: {
      href: "https://...",
      type: "application/hal+json",
    },
    payment: {
      href: "https://...",
      type: "application/hal+json",
    },
    settlement: {
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

### `models.EntityPayoutResponse`

```typescript
const value: models.EntityPayoutResponse = {
  resource: "payout",
  id: "payout_j8NvRAM2WNZtsykpLEX8J",
  balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
  amount: null,
  description: "My payout description",
  status: "requested",
  statusReason: {
    code: "requested",
    message: "The payout has been requested.",
  },
  createdAt: "2024-03-20T09:13:37+00:00",
  initiatedAt: "2024-03-20T09:13:40+00:00",
  completedAt: "2024-03-20T14:00:00+00:00",
  canceledAt: null,
  mode: "live",
  links: {
    self: {
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

### `models.SalesInvoiceResponse`

```typescript
const value: models.SalesInvoiceResponse = {
  resource: "sales-invoice",
  id: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
  mode: "live",
  invoiceNumber: "INV-0000001",
  profileId: "pfl_QkEhN94Ba",
  status: "draft",
  eInvoiceStatus: "issuing",
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
};
```

### `models.TransferResponse`

```typescript
const value: models.TransferResponse = {
  resource: "business-account-transfer",
  id: "batrf_87GByBuj4UCcUTEbs6aGJ",
  mode: "live",
  debtor: {
    fullName: "Jan Jansen",
    account: {
      iban: "NL02ABNA0123456789",
    },
  },
  creditor: {
    fullName: "Jan Jansen",
    account: {
      iban: "NL02ABNA0123456789",
    },
  },
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  description: "Invoice 12345",
  businessAccountTransactionId: "batr_87GByBuj4UCcUTEbs6aGJ",
  transferScheme: {
    type: "sepa-credit-inst",
  },
  creditDebitIndicator: "debit",
  status: "initiated",
  statusHistory: [],
  createdAt: "2024-03-20T09:13:37+00:00",
  statusReason: {
    code: "insufficient-funds",
    message: "The creditor account does not exist.",
  },
};
```


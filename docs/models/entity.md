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

### `models.SalesInvoiceResponse`

```typescript
const value: models.SalesInvoiceResponse = {
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
  paymentDetails: {
    source: "payment-link",
    sourceReference: "pl_d9fQur83kFdhH8hIhaZfq",
  },
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


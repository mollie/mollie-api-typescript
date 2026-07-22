# Migrating from `@mollie/api-client` to `mollie-api-typescript`

This guide covers migrating from the legacy community Node.js client (`@mollie/api-client` v4.x) to the official Speakeasy-generated Node SDK (`mollie-api-typescript`).

## Table of contents

- [Why migrate?](#why-migrate)
- [Installation](#installation)
- [Client initialization](#client-initialization)
- [Authentication](#authentication)
- [Resources and methods](#resources-and-methods)
- [Request parameters](#request-parameters)
- [Pagination and listing resources](#pagination-and-listing-resources)
- [Error handling](#error-handling)
- [TypeScript types and imports](#typescript-types-and-imports)
- [New features](#new-features)
- [Full resource mapping](#full-resource-mapping)

---

## Why migrate?

Mollie is working towards fully migrating to the new, **automatically generated SDKs**. Unlike our legacy SDKs, which are updated manually, the new SDKs are generated directly from our API specification, making new features and API updates available within 24 hours of changes being released. This ensures that your integration stays up to date with minimal effort and allows you to benefit from the latest version of our product at all times.

Beyond staying up-to-date automatically, `mollie-api-typescript` also provides:

- Complete API coverage — includes Webhooks, Webhook Events, Sessions, Sales Invoices, Payouts, Transfers, and more.
- Every response schema is validated at runtime.
- Built-in retry logic with configurable backoff strategies.
- First-class webhook signature validation.
- Tree-shakeable standalone functions for bundle-size-sensitive environments.
- `profileId` and `testmode` available as global client options regardless of auth type.
- Full ESM and CommonJS support.

---

## Installation

Remove the old package and add the new one:

```
npm remove @mollie/api-client
npm add mollie-api-typescript
```

```
yarn remove @mollie/api-client
yarn add mollie-api-typescript
```

---

## Client initialization

The old SDK used a functional factory (`createMollieClient`). The new SDK uses a class (`new Client(...)`).

**Before:**

```
import createMollieClient from '@mollie/api-client';

const client = createMollieClient({
  apiKey: process.env.MOLLIE_API_KEY,
});
```

**After:**

```
import { Client } from 'mollie-api-typescript';

const client = new Client({
  security: {
    apiKey: process.env.MOLLIE_API_KEY,
  },
});
```

---

## Authentication

### API key

```
-import createMollieClient from '@mollie/api-client';
-const client = createMollieClient({ apiKey: 'test_...' });
+import { Client } from 'mollie-api-typescript';
+const client = new Client({ security: { apiKey: 'test_...' } });
```

### Advanced Access Token

```
-const client = createMollieClient({ accessToken: 'access_...' });
+const client = new Client({ security: { advancedAccessToken: 'access_...' } });
```

### OAuth token

```
const client = new Client({ security: { oAuth: 'Bearer eyJ...' } });
```

### Global defaults (`profileId`, `testmode`)

In the old SDK, `parameterDefaults` was only available with `accessToken`. In the new SDK, `profileId` and `testmode` are available when using an Advanced Access Token or OAuth, and set directly on the client:

```
-const client = createMollieClient({
-  accessToken: 'access_...',
-  parameterDefaults: { profileId: 'pfl_...', testmode: true },
-});
+const client = new Client({
+  security: { advancedAccessToken: 'access_...' },
+  profileId: 'pfl_...',
+  testmode: true,
+});
```

---

## Resources and methods

### Method calls now use a single request object

The biggest ergonomic change is that the first positional `id` argument is now part of a single request object:

```
-const payment = await client.payments.get('tr_WDqYK6vllg');
+const payment = await client.payments.get({ id: 'tr_WDqYK6vllg' });
```

```
-const payment = await client.payments.create({
-  amount: { value: '10.00', currency: 'EUR' },
-  description: 'Order #478',
-  redirectUrl: 'https://example.com/redirect',
-});
+const payment = await client.payments.create({
+  paymentRequest: {
+    amount: { value: '10.00', currency: 'EUR' },
+    description: 'Order #478',
+    redirectUrl: 'https://example.com/redirect',
+  },
+});
```

The request body is nested under a typed key (e.g. `paymentRequest`, `mandateRequest`, `orderRequest`). Top-level keys on the request object are path/query parameters and per-request options like `idempotencyKey`.

### Update

```
-const updated = await client.payments.update('tr_...', {
-  description: 'New description',
-});
+const updated = await client.payments.update({
+  id: 'tr_...',
+  updatePaymentRequest: { description: 'New description' },
+});
```

### Cancel / delete

```
-await client.payments.cancel('tr_...');
+await client.payments.cancel({ id: 'tr_...' });
```

### Aliases removed

The old SDK exposed `page`, `all`, and `list` as interchangeable aliases. The new SDK uses only `list`:

```
-const page = await client.payments.page({ limit: 10 });
-// or: client.payments.all({ limit: 10 })
-// or: client.payments.list({ limit: 10 })
+const result = await client.payments.list({ limit: 10 });
```

The `Page<T>` result also had `nextPage()` and `previousPage()` helpers for manual cursor navigation that are now deprecated — you can use `for await` over the result of `list()` instead, which handles pagination automatically:

```
-const page = await client.payments.page();
-if (page.nextPage) {
-  const next = await page.nextPage();
-}
-if (page.previousPage) {
-  const previous = await page.previousPage();
-}
+const result = await client.payments.list();
+for await (const payment of result) {
+  console.log(payment);
+}
```

### Nested resources

The old SDK had separate top-level binders for every nested resource (`client.customerMandates`, `client.paymentRefunds`, etc.). In the new SDK, nested operations are methods on the parent resource, or the resource now takes a parent ID as a parameter:

| Old | New |
| --- | --- |
| `client.customerMandates.create({ customerId, ...body })` | `client.mandates.create({ customerId, mandateRequest: {...} })` |
| `client.customerMandates.get(mandateId, { customerId })` | `client.mandates.get({ customerId, id: mandateId })` |
| `client.customerMandates.page({ customerId })` | `client.mandates.list({ customerId })` |
| `client.customerMandates.revoke({ mandateId, customerId })` | `client.mandates.revoke({ customerId, id: mandateId })` |
| `client.customerPayments.page({ customerId })` | `client.customers.listPayments({ customerId })` |
| `client.customerSubscriptions.page({ customerId })` | `client.subscriptions.list({ customerId })` |
| `client.subscriptionPayments.page({ subscriptionId, customerId })` | `client.subscriptions.listPayments({ subscriptionId, customerId })` |
| `client.paymentRefunds.page({ paymentId })` | `client.refunds.list({ paymentId })` |
| `client.paymentChargebacks.page({ paymentId })` | `client.chargebacks.list({ paymentId })` |
| `client.paymentCaptures.page({ paymentId })` | `client.captures.list({ paymentId })` |
| `client.settlementPayments.page({ settlementId })` | `client.settlements.listPayments({ settlementId })` |
| `client.settlementRefunds.page({ settlementId })` | `client.settlements.listRefunds({ settlementId })` |
| `client.settlementCaptures.page({ settlementId })` | `client.settlements.listCaptures({ settlementId })` |
| `client.settlementChargebacks.page({ settlementId })` | `client.settlements.listChargebacks({ settlementId })` |
| `client.profileMethods.page({ profileId })` | `client.methods.list({ profileId })` |
| `client.applePay.requestPaymentSession(params)` | `client.wallets.requestApplePaySession({ applePaySessionRequest: {...} })` |

### Callbacks removed

The old SDK supported Node-style callbacks as an alternative to Promises. The new SDK is **async**/**await** only:

```
-client.payments.get('tr_...', (error, payment) => {
-  if (error) { /* handle */ }
-  console.log(payment);
-});
+const payment = await client.payments.get({ id: 'tr_...' });
```

---

## Request parameters

### Idempotency key

The old SDK didn't expose per-request idempotency keys. The new SDK accepts `idempotencyKey` on every mutating request:

```
await client.payments.create({
  paymentRequest: { ... },
  idempotencyKey: '123e4567-e89b-12d3-a456-426614174000',
});
```

### `testmode` and `profileId` per request

These can be overridden per request even if defaults are set on the client:

```
await client.payments.create({
  paymentRequest: { ... },
  testmode: false,
  profileId: 'pfl_other',
});
```

---

## Pagination and listing resources

### Old SDK — `page()` / `iterate()`

The old SDK returned a `Page<T>` (an array subclass) from `page()` and provided a separate `iterate()` method that returned an `AsyncIterator<T>`:

```
// Fetch one page
const page = await client.payments.page({ limit: 10 });
console.log(page.length, page.nextPageCursor);

// Navigate pages manually
if (page.nextPage) {
  const next = await page.nextPage();
}

// Stream all items
for await (const payment of client.payments.iterate()) {
  console.log(payment);
}
```

### New SDK — `list()` returns an async iterable

`list()` returns a `PageIterator` that you iterate with `for await`:

```
// Stream all items across pages
const result = await client.payments.list({ limit: 10 });
for await (const payment of result) {
  console.log(payment);
}
```

There is no separate `iterate()` method — `list()` handles both single-page and multi-page use cases.

---

## Error handling

### Old SDK — `MollieApiError`

```
import { MollieApiError } from '@mollie/api-client';

try {
  await client.payments.get({ id: 'invalid' });
} catch (error) {
  if (error instanceof MollieApiError) {
    console.log(error.statusCode);      // HTTP status
    console.log(error.field);           // field that caused the error
    console.log(error.getDocumentationUrl()); // link to docs
  }
}
```

### New SDK — `ErrorResponse`

```
import { ErrorResponse, SDKValidationError } from 'mollie-api-typescript';

try {
  await client.payments.get({ id: 'invalid' });
} catch (error) {
  if (error instanceof ErrorResponse) {
    console.log(error.status);   // HTTP status
    console.log(error.detail);   // human-readable message
    console.log(error.field);    // field that caused the error
    console.log(error.links);    // _links from the API response
  }
  if (error instanceof SDKValidationError) {
    // Response failed Zod schema validation
    console.log(error.rawValue);
  }
}
```

---

## TypeScript types and imports

### Models

```
-import type { Payment } from '@mollie/api-client';
+import type { PaymentResponse } from 'mollie-api-typescript';
```

All response models are exported from the package root. Parameter types live under `models/operations`:

```
import type { CreatePaymentRequest } from 'mollie-api-typescript/models/operations';
```

### Enums

Many enums previously exported from `@mollie/api-client` are now string literal union types in the generated models. Import the type from the models index:

```
// Old
import { PaymentStatus, PaymentMethod, Locale } from '@mollie/api-client';

// New — inline string unions; no separate enum import needed
// Type-check against the response type directly:
import type { PaymentResponse } from 'mollie-api-typescript';
```

### `Page<T>`

The `Page<T>` type does not exist in the new SDK. Use the `for await` pattern over the result of `list()` instead.

---

## New features

### Webhook signature validation

```
import { SignatureValidator, InvalidSignatureException } from 'mollie-api-typescript';

const validator = new SignatureValidator(process.env.WEBHOOK_SECRET);

try {
  const isValid = await validator.validatePayload(rawBody, signatureHeader);
} catch (error) {
  if (error instanceof InvalidSignatureException) {
    // Reject the request
  }
}
```

### Retries

```
const client = new Client({
  security: { apiKey: 'test_...' },
  retryConfig: {
    strategy: 'backoff',
    backoff: {
      initialInterval: 500,
      maxInterval: 60_000,
      exponent: 1.5,
      maxElapsedTime: 300_000,
    },
    retryConnectionErrors: true,
  },
});
```

### Custom HTTP client

```
import { Client, HTTPClient } from 'mollie-api-typescript';

const httpClient = new HTTPClient({
  fetcher: (request) => fetch(request),
});

const client = new Client({
  security: { apiKey: 'test_...' },
  httpClient,
});
```

### Standalone (tree-shakeable) functions

For bundle-size-sensitive environments, every operation is also available as a standalone function that does not require importing the full `Client`:

```
import { paymentsCreate } from 'mollie-api-typescript/funcs/paymentsCreate';
import { Client } from 'mollie-api-typescript';

const client = new Client({ security: { apiKey: 'test_...' } });
const result = await paymentsCreate(client, {
  paymentRequest: {
    amount: { value: '10.00', currency: 'EUR' },
    description: 'Order #478',
    redirectUrl: 'https://example.com/redirect',
  },
});
```

See [FUNCTIONS.md](https://github.com/mollie/mollie-api-typescript/blob/main/FUNCTIONS.md) for the full list.

---

## Full resource mapping

### Resources available in both SDKs

| Old (`client.`) | New (`client.`) |
| --- | --- |
| `payments` | `payments` |
| `paymentRefunds` | `refunds` (pass `paymentId`) |
| `paymentChargebacks` | `chargebacks` (pass `paymentId`) |
| `paymentCaptures` | `captures` (pass `paymentId`) |
| `refunds` | `refunds` |
| `chargebacks` | `chargebacks` |
| `methods` | `methods` |
| `customers` | `customers` |
| `customerPayments` | `customers.listPayments({ customerId })` |
| `customerMandates` | `mandates` (pass `customerId`) |
| `customerSubscriptions` | `subscriptions` (pass `customerId`) |
| `subscriptionPayments` | `subscriptions.listPayments({ subscriptionId, customerId })` |
| `settlements` | `settlements` |
| `settlementPayments` | `settlements.listPayments({ settlementId })` |
| `settlementRefunds` | `settlements.listRefunds({ settlementId })` |
| `settlementCaptures` | `settlements.listCaptures({ settlementId })` |
| `settlementChargebacks` | `settlements.listChargebacks({ settlementId })` |
| `profiles` | `profiles` |
| `profileMethods` | `methods` (pass `profileId`) |
| `organizations` | `organizations` |
| `permissions` | `permissions` |
| `onboarding` | `onboarding` |
| `terminals` | `terminals` |
| `paymentLinks` | `paymentLinks` |
| `balanceTransfers` | `balanceTransfers` |
| `capabilities` | `capabilities` |
| `clients` | `clients` |
| `clientLinks` | `clientLinks` |
| `invoices` | `invoices` |
| `oauth` | `oauth` |
| `applePay` | `wallets` |

### Resources available only in the new SDK

| New (`client.`) | Description |
| --- | --- |
| `accounts` | Account management |
| `balances` | Balance retrieval, reports, and transactions |
| `delayedRouting` | Delayed payment routing rules |
| `payouts` | Payout management |
| `salesInvoices` | Sales invoice management |
| `sessions` | Payment sessions |
| `transfers` | Transfer management |
| `unmatchedCreditTransfers` | Unmatched credit transfer handling |
| `verifyPayee` | Payee verification |
| `webhooks` | Webhook management |
| `webhookEvents` | Webhook event retrieval |

For a complete list of all resources and endpoints with usage examples, see the [Available Resources and Operations](https://github.com/mollie/mollie-api-typescript#available-resources-and-operations) section in README.

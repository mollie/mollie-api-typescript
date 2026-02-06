# mollie-api-typescript

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *mollie-api-typescript* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=mollie-api-typescript&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [mollie-api-typescript](#mollie-api-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Idempotency Key](#idempotency-key)
  * [Add Custom User-Agent Header](#add-custom-user-agent-header)
  * [Add Profile ID and Testmode to Client](#add-profile-id-and-testmode-to-client)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Global Parameters](#global-parameters)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add mollie-api-typescript
```

### PNPM

```bash
pnpm add mollie-api-typescript
```

### Bun

```bash
bun add mollie-api-typescript
```

### Yarn

```bash
yarn add mollie-api-typescript
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Client": {
      "command": "npx",
      "args": [
        "-y", "--package", "mollie-api-typescript",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--o-auth", "...",
        "--profile-id", "...",
        "--testmode", "...",
        "--custom-user-agent", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Client": {
      "command": "npx",
      "args": [
        "-y", "--package", "mollie-api-typescript",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--o-auth", "...",
        "--profile-id", "...",
        "--testmode", "...",
        "--custom-user-agent", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package mollie-api-typescript -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.balances.list({
    currency: "EUR",
    from: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name     | Type   | Scheme       | Environment Variable |
| -------- | ------ | ------------ | -------------------- |
| `apiKey` | http   | HTTP Bearer  | `CLIENT_API_KEY`     |
| `oAuth`  | oauth2 | OAuth2 token | `CLIENT_O_AUTH`      |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
  testmode: false,
});

async function run() {
  const result = await client.balances.list({
    currency: "EUR",
    from: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Idempotency Key -->
## Idempotency Key

This SDK supports the usage of Idempotency Keys. See our [documentation](https://docs.mollie.com/reference/api-idempotency) on how to use it.

```typescript
import { Client } from "mollie-api-typescript";

let client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  }
})

let idempotencyKey = '<some-idempotency-key>';

let payload = {
  description: "Description",
  amount: {
    currency: "EUR",
    value: "5.00",
  },
  redirectUrl: "https://example.org/redirect",
}

let payment1 = await client.payments.create(
  {
    paymentRequest: payload,
    idempotencyKey: idempotencyKey  
  }
);

let payment2 = await client.payments.create(
  {
    paymentRequest: payload,
    idempotencyKey: idempotencyKey
  }
);

console.log(`Payment with id: ${payment1.id}`);
console.log(`Payment with id: ${payment2.id}`);
console.log(payment1.id === payment2.id ? "Payments are the same" : "Payments are different");
```
<!-- End Idempotency Key -->

<!-- Start Add Custom User-Agent Header -->

## Add Custom User-Agent Header
The SDK allows you to append a custom suffix to the `User-Agent` header for all requests. This can be used to identify
your application or integration when interacting with the API, making it easier to track usage or debug requests. The suffix is automatically added to the default User-Agent string generated by the SDK. You can add it when creating the
client:

```js
let client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
  customUserAgent: "insert something here"
})
```

<!-- End Add Custom User-Agent Header -->

<!-- Start Add Profile ID and Testmode to Client -->

## Add Profile ID and Testmode to Client
The SDK allows you to define the `profileId` and `testmode` in the client. This way, you don't need to add this
information to the payload every time when using OAuth. This will not override the details provided in the individual
requests.

```ts
let client = new Client({
  security: {
    oAuth: process.env["CLIENT_OAUTH_KEY"] ?? "",
  },
  testmode: false,
  profileId: "pfl_..."
})
```

<!-- End Add Profile ID and Testmode to Client -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [BalanceTransfers](docs/sdks/balancetransfers/README.md)

* [create](docs/sdks/balancetransfers/README.md#create) - Create a Connect balance transfer
* [list](docs/sdks/balancetransfers/README.md#list) - List all Connect balance transfers
* [get](docs/sdks/balancetransfers/README.md#get) - Get a Connect balance transfer

### [Balances](docs/sdks/balances/README.md)

* [list](docs/sdks/balances/README.md#list) - List balances
* [get](docs/sdks/balances/README.md#get) - Get balance
* [getPrimary](docs/sdks/balances/README.md#getprimary) - Get primary balance
* [getReport](docs/sdks/balances/README.md#getreport) - Get balance report
* [listTransactions](docs/sdks/balances/README.md#listtransactions) - List balance transactions

### [Capabilities](docs/sdks/capabilities/README.md)

* [list](docs/sdks/capabilities/README.md#list) - List capabilities

### [Captures](docs/sdks/captures/README.md)

* [create](docs/sdks/captures/README.md#create) - Create capture
* [list](docs/sdks/captures/README.md#list) - List captures
* [get](docs/sdks/captures/README.md#get) - Get capture

### [Chargebacks](docs/sdks/chargebacks/README.md)

* [list](docs/sdks/chargebacks/README.md#list) - List payment chargebacks
* [get](docs/sdks/chargebacks/README.md#get) - Get payment chargeback
* [all](docs/sdks/chargebacks/README.md#all) - List all chargebacks

### [ClientLinks](docs/sdks/clientlinks/README.md)

* [create](docs/sdks/clientlinks/README.md#create) - Create client link

### [Clients](docs/sdks/clients/README.md)

* [list](docs/sdks/clients/README.md#list) - List clients
* [get](docs/sdks/clients/README.md#get) - Get client

### [Customers](docs/sdks/customers/README.md)

* [create](docs/sdks/customers/README.md#create) - Create customer
* [list](docs/sdks/customers/README.md#list) - List customers
* [get](docs/sdks/customers/README.md#get) - Get customer
* [update](docs/sdks/customers/README.md#update) - Update customer
* [delete](docs/sdks/customers/README.md#delete) - Delete customer
* [createPayment](docs/sdks/customers/README.md#createpayment) - Create customer payment
* [listPayments](docs/sdks/customers/README.md#listpayments) - List customer payments

### [DelayedRouting](docs/sdks/delayedrouting/README.md)

* [create](docs/sdks/delayedrouting/README.md#create) - Create a delayed route
* [list](docs/sdks/delayedrouting/README.md#list) - List payment routes
* [get](docs/sdks/delayedrouting/README.md#get) - Get a delayed route

### [Invoices](docs/sdks/invoices/README.md)

* [list](docs/sdks/invoices/README.md#list) - List invoices
* [get](docs/sdks/invoices/README.md#get) - Get invoice

### [Mandates](docs/sdks/mandates/README.md)

* [create](docs/sdks/mandates/README.md#create) - Create mandate
* [list](docs/sdks/mandates/README.md#list) - List mandates
* [get](docs/sdks/mandates/README.md#get) - Get mandate
* [revoke](docs/sdks/mandates/README.md#revoke) - Revoke mandate

### [Methods](docs/sdks/methods/README.md)

* [list](docs/sdks/methods/README.md#list) - List payment methods
* [all](docs/sdks/methods/README.md#all) - List all payment methods
* [get](docs/sdks/methods/README.md#get) - Get payment method

### [Onboarding](docs/sdks/onboarding/README.md)

* [get](docs/sdks/onboarding/README.md#get) - Get onboarding status
* [submit](docs/sdks/onboarding/README.md#submit) - Submit onboarding data

### [Organizations](docs/sdks/organizations/README.md)

* [get](docs/sdks/organizations/README.md#get) - Get organization
* [getCurrent](docs/sdks/organizations/README.md#getcurrent) - Get current organization
* [getPartner](docs/sdks/organizations/README.md#getpartner) - Get partner status

### [PaymentLinks](docs/sdks/paymentlinks/README.md)

* [create](docs/sdks/paymentlinks/README.md#create) - Create payment link
* [list](docs/sdks/paymentlinks/README.md#list) - List payment links
* [get](docs/sdks/paymentlinks/README.md#get) - Get payment link
* [update](docs/sdks/paymentlinks/README.md#update) - Update payment link
* [delete](docs/sdks/paymentlinks/README.md#delete) - Delete payment link
* [listPayments](docs/sdks/paymentlinks/README.md#listpayments) - Get payment link payments

### [Payments](docs/sdks/payments/README.md)

* [create](docs/sdks/payments/README.md#create) - Create payment
* [list](docs/sdks/payments/README.md#list) - List payments
* [get](docs/sdks/payments/README.md#get) - Get payment
* [update](docs/sdks/payments/README.md#update) - Update payment
* [cancel](docs/sdks/payments/README.md#cancel) - Cancel payment
* [releaseAuthorization](docs/sdks/payments/README.md#releaseauthorization) - Release payment authorization

### [Permissions](docs/sdks/permissions/README.md)

* [list](docs/sdks/permissions/README.md#list) - List permissions
* [get](docs/sdks/permissions/README.md#get) - Get permission

### [Profiles](docs/sdks/profiles/README.md)

* [create](docs/sdks/profiles/README.md#create) - Create profile
* [list](docs/sdks/profiles/README.md#list) - List profiles
* [get](docs/sdks/profiles/README.md#get) - Get profile
* [update](docs/sdks/profiles/README.md#update) - Update profile
* [delete](docs/sdks/profiles/README.md#delete) - Delete profile
* [getCurrent](docs/sdks/profiles/README.md#getcurrent) - Get current profile

### [Refunds](docs/sdks/refunds/README.md)

* [create](docs/sdks/refunds/README.md#create) - Create payment refund
* [list](docs/sdks/refunds/README.md#list) - List payment refunds
* [get](docs/sdks/refunds/README.md#get) - Get payment refund
* [cancel](docs/sdks/refunds/README.md#cancel) - Cancel payment refund
* [all](docs/sdks/refunds/README.md#all) - List all refunds

### [SalesInvoices](docs/sdks/salesinvoices/README.md)

* [create](docs/sdks/salesinvoices/README.md#create) - Create sales invoice
* [list](docs/sdks/salesinvoices/README.md#list) - List sales invoices
* [get](docs/sdks/salesinvoices/README.md#get) - Get sales invoice
* [update](docs/sdks/salesinvoices/README.md#update) - Update sales invoice
* [delete](docs/sdks/salesinvoices/README.md#delete) - Delete sales invoice

### [Settlements](docs/sdks/settlements/README.md)

* [list](docs/sdks/settlements/README.md#list) - List settlements
* [get](docs/sdks/settlements/README.md#get) - Get settlement
* [getOpen](docs/sdks/settlements/README.md#getopen) - Get open settlement
* [getNext](docs/sdks/settlements/README.md#getnext) - Get next settlement
* [listPayments](docs/sdks/settlements/README.md#listpayments) - List settlement payments
* [listCaptures](docs/sdks/settlements/README.md#listcaptures) - List settlement captures
* [listRefunds](docs/sdks/settlements/README.md#listrefunds) - List settlement refunds
* [listChargebacks](docs/sdks/settlements/README.md#listchargebacks) - List settlement chargebacks

### [Subscriptions](docs/sdks/subscriptions/README.md)

* [create](docs/sdks/subscriptions/README.md#create) - Create subscription
* [list](docs/sdks/subscriptions/README.md#list) - List customer subscriptions
* [get](docs/sdks/subscriptions/README.md#get) - Get subscription
* [update](docs/sdks/subscriptions/README.md#update) - Update subscription
* [cancel](docs/sdks/subscriptions/README.md#cancel) - Cancel subscription
* [all](docs/sdks/subscriptions/README.md#all) - List all subscriptions
* [listPayments](docs/sdks/subscriptions/README.md#listpayments) - List subscription payments

### [Terminals](docs/sdks/terminals/README.md)

* [list](docs/sdks/terminals/README.md#list) - List terminals
* [get](docs/sdks/terminals/README.md#get) - Get terminal

### [Wallets](docs/sdks/wallets/README.md)

* [requestApplePaySession](docs/sdks/wallets/README.md#requestapplepaysession) - Request Apple Pay payment session

### [WebhookEvents](docs/sdks/webhookevents/README.md)

* [get](docs/sdks/webhookevents/README.md#get) - Get a Webhook Event

### [Webhooks](docs/sdks/webhooks/README.md)

* [create](docs/sdks/webhooks/README.md#create) - Create a webhook
* [list](docs/sdks/webhooks/README.md#list) - List all webhooks
* [update](docs/sdks/webhooks/README.md#update) - Update a webhook
* [get](docs/sdks/webhooks/README.md#get) - Get a webhook
* [delete](docs/sdks/webhooks/README.md#delete) - Delete a webhook
* [test](docs/sdks/webhooks/README.md#test) - Test a webhook

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`balancesGet`](docs/sdks/balances/README.md#get) - Get balance
- [`balancesGetPrimary`](docs/sdks/balances/README.md#getprimary) - Get primary balance
- [`balancesGetReport`](docs/sdks/balances/README.md#getreport) - Get balance report
- [`balancesList`](docs/sdks/balances/README.md#list) - List balances
- [`balancesListTransactions`](docs/sdks/balances/README.md#listtransactions) - List balance transactions
- [`balanceTransfersCreate`](docs/sdks/balancetransfers/README.md#create) - Create a Connect balance transfer
- [`balanceTransfersGet`](docs/sdks/balancetransfers/README.md#get) - Get a Connect balance transfer
- [`balanceTransfersList`](docs/sdks/balancetransfers/README.md#list) - List all Connect balance transfers
- [`capabilitiesList`](docs/sdks/capabilities/README.md#list) - List capabilities
- [`capturesCreate`](docs/sdks/captures/README.md#create) - Create capture
- [`capturesGet`](docs/sdks/captures/README.md#get) - Get capture
- [`capturesList`](docs/sdks/captures/README.md#list) - List captures
- [`chargebacksAll`](docs/sdks/chargebacks/README.md#all) - List all chargebacks
- [`chargebacksGet`](docs/sdks/chargebacks/README.md#get) - Get payment chargeback
- [`chargebacksList`](docs/sdks/chargebacks/README.md#list) - List payment chargebacks
- [`clientLinksCreate`](docs/sdks/clientlinks/README.md#create) - Create client link
- [`clientsGet`](docs/sdks/clients/README.md#get) - Get client
- [`clientsList`](docs/sdks/clients/README.md#list) - List clients
- [`customersCreate`](docs/sdks/customers/README.md#create) - Create customer
- [`customersCreatePayment`](docs/sdks/customers/README.md#createpayment) - Create customer payment
- [`customersDelete`](docs/sdks/customers/README.md#delete) - Delete customer
- [`customersGet`](docs/sdks/customers/README.md#get) - Get customer
- [`customersList`](docs/sdks/customers/README.md#list) - List customers
- [`customersListPayments`](docs/sdks/customers/README.md#listpayments) - List customer payments
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Update customer
- [`delayedRoutingCreate`](docs/sdks/delayedrouting/README.md#create) - Create a delayed route
- [`delayedRoutingGet`](docs/sdks/delayedrouting/README.md#get) - Get a delayed route
- [`delayedRoutingList`](docs/sdks/delayedrouting/README.md#list) - List payment routes
- [`invoicesGet`](docs/sdks/invoices/README.md#get) - Get invoice
- [`invoicesList`](docs/sdks/invoices/README.md#list) - List invoices
- [`mandatesCreate`](docs/sdks/mandates/README.md#create) - Create mandate
- [`mandatesGet`](docs/sdks/mandates/README.md#get) - Get mandate
- [`mandatesList`](docs/sdks/mandates/README.md#list) - List mandates
- [`mandatesRevoke`](docs/sdks/mandates/README.md#revoke) - Revoke mandate
- [`methodsAll`](docs/sdks/methods/README.md#all) - List all payment methods
- [`methodsGet`](docs/sdks/methods/README.md#get) - Get payment method
- [`methodsList`](docs/sdks/methods/README.md#list) - List payment methods
- [`onboardingGet`](docs/sdks/onboarding/README.md#get) - Get onboarding status
- [`onboardingSubmit`](docs/sdks/onboarding/README.md#submit) - Submit onboarding data
- [`organizationsGet`](docs/sdks/organizations/README.md#get) - Get organization
- [`organizationsGetCurrent`](docs/sdks/organizations/README.md#getcurrent) - Get current organization
- [`organizationsGetPartner`](docs/sdks/organizations/README.md#getpartner) - Get partner status
- [`paymentLinksCreate`](docs/sdks/paymentlinks/README.md#create) - Create payment link
- [`paymentLinksDelete`](docs/sdks/paymentlinks/README.md#delete) - Delete payment link
- [`paymentLinksGet`](docs/sdks/paymentlinks/README.md#get) - Get payment link
- [`paymentLinksList`](docs/sdks/paymentlinks/README.md#list) - List payment links
- [`paymentLinksListPayments`](docs/sdks/paymentlinks/README.md#listpayments) - Get payment link payments
- [`paymentLinksUpdate`](docs/sdks/paymentlinks/README.md#update) - Update payment link
- [`paymentsCancel`](docs/sdks/payments/README.md#cancel) - Cancel payment
- [`paymentsCreate`](docs/sdks/payments/README.md#create) - Create payment
- [`paymentsGet`](docs/sdks/payments/README.md#get) - Get payment
- [`paymentsList`](docs/sdks/payments/README.md#list) - List payments
- [`paymentsReleaseAuthorization`](docs/sdks/payments/README.md#releaseauthorization) - Release payment authorization
- [`paymentsUpdate`](docs/sdks/payments/README.md#update) - Update payment
- [`permissionsGet`](docs/sdks/permissions/README.md#get) - Get permission
- [`permissionsList`](docs/sdks/permissions/README.md#list) - List permissions
- [`profilesCreate`](docs/sdks/profiles/README.md#create) - Create profile
- [`profilesDelete`](docs/sdks/profiles/README.md#delete) - Delete profile
- [`profilesGet`](docs/sdks/profiles/README.md#get) - Get profile
- [`profilesGetCurrent`](docs/sdks/profiles/README.md#getcurrent) - Get current profile
- [`profilesList`](docs/sdks/profiles/README.md#list) - List profiles
- [`profilesUpdate`](docs/sdks/profiles/README.md#update) - Update profile
- [`refundsAll`](docs/sdks/refunds/README.md#all) - List all refunds
- [`refundsCancel`](docs/sdks/refunds/README.md#cancel) - Cancel payment refund
- [`refundsCreate`](docs/sdks/refunds/README.md#create) - Create payment refund
- [`refundsGet`](docs/sdks/refunds/README.md#get) - Get payment refund
- [`refundsList`](docs/sdks/refunds/README.md#list) - List payment refunds
- [`salesInvoicesCreate`](docs/sdks/salesinvoices/README.md#create) - Create sales invoice
- [`salesInvoicesDelete`](docs/sdks/salesinvoices/README.md#delete) - Delete sales invoice
- [`salesInvoicesGet`](docs/sdks/salesinvoices/README.md#get) - Get sales invoice
- [`salesInvoicesList`](docs/sdks/salesinvoices/README.md#list) - List sales invoices
- [`salesInvoicesUpdate`](docs/sdks/salesinvoices/README.md#update) - Update sales invoice
- [`settlementsGet`](docs/sdks/settlements/README.md#get) - Get settlement
- [`settlementsGetNext`](docs/sdks/settlements/README.md#getnext) - Get next settlement
- [`settlementsGetOpen`](docs/sdks/settlements/README.md#getopen) - Get open settlement
- [`settlementsList`](docs/sdks/settlements/README.md#list) - List settlements
- [`settlementsListCaptures`](docs/sdks/settlements/README.md#listcaptures) - List settlement captures
- [`settlementsListChargebacks`](docs/sdks/settlements/README.md#listchargebacks) - List settlement chargebacks
- [`settlementsListPayments`](docs/sdks/settlements/README.md#listpayments) - List settlement payments
- [`settlementsListRefunds`](docs/sdks/settlements/README.md#listrefunds) - List settlement refunds
- [`subscriptionsAll`](docs/sdks/subscriptions/README.md#all) - List all subscriptions
- [`subscriptionsCancel`](docs/sdks/subscriptions/README.md#cancel) - Cancel subscription
- [`subscriptionsCreate`](docs/sdks/subscriptions/README.md#create) - Create subscription
- [`subscriptionsGet`](docs/sdks/subscriptions/README.md#get) - Get subscription
- [`subscriptionsList`](docs/sdks/subscriptions/README.md#list) - List customer subscriptions
- [`subscriptionsListPayments`](docs/sdks/subscriptions/README.md#listpayments) - List subscription payments
- [`subscriptionsUpdate`](docs/sdks/subscriptions/README.md#update) - Update subscription
- [`terminalsGet`](docs/sdks/terminals/README.md#get) - Get terminal
- [`terminalsList`](docs/sdks/terminals/README.md#list) - List terminals
- [`walletsRequestApplePaySession`](docs/sdks/wallets/README.md#requestapplepaysession) - Request Apple Pay payment session
- [`webhookEventsGet`](docs/sdks/webhookevents/README.md#get) - Get a Webhook Event
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create a webhook
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete a webhook
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get a webhook
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List all webhooks
- [`webhooksTest`](docs/sdks/webhooks/README.md#test) - Test a webhook
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update a webhook

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

Certain parameters are configured globally. These parameters may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, These global values will be used as defaults on the operations that use them. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `profileId` to `` at SDK initialization and then you do not have to pass the same value on calls to operations like `list`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameters are available.
Global parameters can also be set via environment variable.

| Name            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                            | Environment              |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| profileId       | string  | The identifier referring to the [profile](get-profile) you wish to<br/>retrieve the resources for.<br/><br/>Most API credentials are linked to a single profile. In these cases the `profileId` can be omitted. For<br/>organization-level credentials such as OAuth access tokens however, the `profileId` parameter is required.                                                                     | CLIENT_PROFILE_ID        |
| testmode        | boolean | Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query<br/>parameter can be omitted. For organization-level credentials such as OAuth access tokens, you can enable test mode by<br/>setting the `testmode` query parameter to `true`.<br/><br/>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. | CLIENT_TESTMODE          |
| customUserAgent | string  | Custom user agent string to be appended to the default Mollie SDK user agent.                                                                                                                                                                                                                                                                                                                          | CLIENT_CUSTOM_USER_AGENT |

### Example

```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  profileId: "<id>",
  customUserAgent: "<value>",
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.balances.list({
    currency: "EUR",
    from: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.balances.list({
    currency: "EUR",
    from: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.balances.list({
    currency: "EUR",
    from: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ClientError`](./src/models/errors/clienterror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Client } from "mollie-api-typescript";
import * as errors from "mollie-api-typescript/models/errors";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  try {
    const result = await client.balances.list({
      currency: "EUR",
      from: "bal_gVMhHKqSSRYJyPsuoPNFH",
      limit: 50,
      idempotencyKey: "123e4567-e89b-12d3-a456-426",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ClientError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorResponse) {
        console.log(error.data$.status); // number
        console.log(error.data$.title); // string
        console.log(error.data$.detail); // string
        console.log(error.data$.field); // string
        console.log(error.data$.links); // models.ErrorResponseLinks
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`ClientError`](./src/models/errors/clienterror.ts): The base class for HTTP error responses.
  * [`ErrorResponse`](./src/models/errors/errorresponse.ts): An error response object. *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`ClientError`](./src/models/errors/clienterror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  serverURL: "https://api.mollie.com/v2",
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.balances.list({
    currency: "EUR",
    from: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Client } from "mollie-api-typescript";
import { HTTPClient } from "mollie-api-typescript/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Client({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Client } from "mollie-api-typescript";

const sdk = new Client({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `CLIENT_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=mollie-api-typescript&utm_campaign=typescript)

# Transfers

## Overview

### Available Operations

* [create](#create) - Create transfer
* [get](#get) - Get transfer

## create

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Create a SEPA Credit Transfer from your Mollie Business Account.

To initiate a transfer, you must provide the transfer scheme, the amount, the debtor IBAN (your Mollie Business
Account IBAN), and the creditor (recipient) details.

Each request must include an `Idempotency-Key` header to prevent duplicate transfers, and must be signed using the
`X-Client-Signature` and `X-Client-Signed-At` headers.

### Simulating transfer scenarios in test mode

In test mode, you can simulate various transfer scenarios by adjusting the transfer amount. This allows you to
mimic the typical status progression of a real-world transfer. Note that a transfer's progression will stop once
it reaches a final status: `blocked`, `failed`, or `processed`.

| Amount  | Scenario                                           | Webhook sequence                                                                                                                                                   |
|---------|----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `11.00` | Transfer initiated, pending review by Mollie       | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.pending-review`                                         |
| `12.00` | Transfer initiated, blocked by Mollie              | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.pending-review` → `business-account-transfer.blocked`   |
| `13.00` | Transfer initiated, failed on scheme submission    | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.failed`                                                 |
| Other   | Default: transfer is processed                     | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.processed`                                              |

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-transfer" method="post" path="/business-accounts/transfers" example="create-transfer-201" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.transfers.create({
    xClientSignature: "<value>",
    xClientSignedAt: "2025-01-01T12:00:00Z",
    idempotencyKey: "aa84d3c0-1484-4f45-8a8d-4674a0147f3f",
    idempotencyKey1: "123e4567-e89b-12d3-a456-426",
    transferRequest: {
      debtorIban: "NL55MLLE0123456789",
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
      transferScheme: {
        type: "sepa-credit-inst",
      },
      testmode: false,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { transfersCreate } from "mollie-api-typescript/funcs/transfersCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await transfersCreate(client, {
    xClientSignature: "<value>",
    xClientSignedAt: "2025-01-01T12:00:00Z",
    idempotencyKey: "aa84d3c0-1484-4f45-8a8d-4674a0147f3f",
    idempotencyKey1: "123e4567-e89b-12d3-a456-426",
    transferRequest: {
      debtorIban: "NL55MLLE0123456789",
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
      transferScheme: {
        type: "sepa-credit-inst",
      },
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransferRequest](../../models/operations/createtransferrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransferResponse](../../models/transferresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 422                       | application/hal+json      |
| errors.ErrorResponse      | 503                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Retrieve a single transfer object by its transfer ID. This allows you to check the current status
and details of a previously created transfer.

### Example Usage: get-transfer-200

<!-- UsageSnippet language="typescript" operationID="get-transfer" method="get" path="/business-accounts/transfers/{businessAccountsTransferId}" example="get-transfer-200" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.transfers.get({
    businessAccountsTransferId: "batrf_87GByBuj4UCcUTEbs6aGJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { transfersGet } from "mollie-api-typescript/funcs/transfersGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await transfersGet(client, {
    businessAccountsTransferId: "batrf_87GByBuj4UCcUTEbs6aGJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGet failed:", res.error);
  }
}

run();
```
### Example Usage: processed-transfer

<!-- UsageSnippet language="typescript" operationID="get-transfer" method="get" path="/business-accounts/transfers/{businessAccountsTransferId}" example="processed-transfer" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: true,
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.transfers.get({
    businessAccountsTransferId: "batrf_87GByBuj4UCcUTEbs6aGJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { transfersGet } from "mollie-api-typescript/funcs/transfersGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await transfersGet(client, {
    businessAccountsTransferId: "batrf_87GByBuj4UCcUTEbs6aGJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransferRequest](../../models/operations/gettransferrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransferResponse](../../models/transferresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
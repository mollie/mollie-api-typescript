# Payouts

## Overview

### Available Operations

* [create](#create) - Create payout
* [list](#list) - List payouts
* [get](#get) - Get payout
* [cancel](#cancel) - Cancel payout

## create

Request a payout from one of your balances to the balance's configured bank account.

The payout will be executed on the next scheduled business day. If no `amount` is specified, the full available
balance minus any configured balance reserve is paid out.

Once the payout is created with status `requested`, you can cancel it via the
[Cancel payout](cancel-payout) endpoint, up until the payout moves to `initiated`.

Creating a payout via the API automatically sets the balance's `transferFrequency` to `never`,
pausing any previously configured automatic settlement schedule. To resume automatic settlements,
update the transfer frequency via the dashboard.

### Webhooks

Subscribe to the following webhook events to track payout status changes. See the
[Webhook Subscriptions API](list-webhooks) for details on subscribing.

| Event | Description |
|---|---|
| `payout.initiated` | The payout is being executed and funds are reserved. |
| `payout.processing-at-bank` | The payout has been submitted to the bank. |
| `payout.completed` | The payout has been sent to the destination bank account. |
| `payout.canceled` | The payout was canceled via the API before being submitted to the bank. |
| `payout.failed` | The payout failed after creation, including bank rejections and post-submission cancellations. |

### Payout failure reasons

A payout request may fail immediately if one of the following conditions applies:

- A payout is already scheduled for the next business day for this balance.
- The balance has insufficient funds.
- The balance is not active.
- Payouts are blocked for this organization.
- The balance has queued refunds.
- One of the organization's balances is below the negative balance threshold.
- The payout destination (bank account) is invalid or not configured.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-payout" method="post" path="/v2/payouts" example="create-payout-201" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: true,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.payouts.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    payoutRequest: {
      balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      description: "My payout description",
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
import { payoutsCreate } from "mollie-api-typescript/funcs/payoutsCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await payoutsCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    payoutRequest: {
      balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      description: "My payout description",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payoutsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePayoutRequest](../../models/operations/createpayoutrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntityPayoutResponse](../../models/entitypayoutresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 422                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## list

Retrieve a list of all payouts for your organization, including payouts initiated automatically by the
balance's payout schedule and payouts requested via the API or dashboard.

Only payouts created on or after April 1st, 2026 are returned.

The results are paginated. Use the `from` query parameter together with `_links.next` to iterate through
the full result set.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-payouts" method="get" path="/v2/payouts" example="list-payouts-200" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: true,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.payouts.list({
    balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { payoutsList } from "mollie-api-typescript/funcs/payoutsList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await payoutsList(client, {
    balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("payoutsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPayoutsRequest](../../models/operations/listpayoutsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPayoutsResponse](../../models/operations/listpayoutsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieve a single payout by its ID.

### Example Usage: get-payout-200-completed

<!-- UsageSnippet language="typescript" operationID="get-payout" method="get" path="/v2/payouts/{payoutId}" example="get-payout-200-completed" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: true,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.payouts.get({
    payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
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
import { payoutsGet } from "mollie-api-typescript/funcs/payoutsGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await payoutsGet(client, {
    payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payoutsGet failed:", res.error);
  }
}

run();
```
### Example Usage: get-payout-200-failed

<!-- UsageSnippet language="typescript" operationID="get-payout" method="get" path="/v2/payouts/{payoutId}" example="get-payout-200-failed" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: true,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.payouts.get({
    payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
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
import { payoutsGet } from "mollie-api-typescript/funcs/payoutsGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await payoutsGet(client, {
    payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payoutsGet failed:", res.error);
  }
}

run();
```
### Example Usage: get-payout-200-requested

<!-- UsageSnippet language="typescript" operationID="get-payout" method="get" path="/v2/payouts/{payoutId}" example="get-payout-200-requested" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.payouts.get({
    payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
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
import { payoutsGet } from "mollie-api-typescript/funcs/payoutsGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: true,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await payoutsGet(client, {
    payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payoutsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPayoutRequest](../../models/operations/getpayoutrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntityPayoutResponse](../../models/entitypayoutresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## cancel

Cancel a payout. A payout can only be canceled while it has the status `requested`. Once the payout moves
to `initiated`, it is too late to cancel.

The canceled payout object is returned with the status set to `canceled`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancel-payout" method="delete" path="/v2/payouts/{payoutId}" example="cancel-payout-200" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: true,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.payouts.cancel({
    payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
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
import { payoutsCancel } from "mollie-api-typescript/funcs/payoutsCancel.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await payoutsCancel(client, {
    payoutId: "payout_j8NvRAM2WNZtsykpLEX8J",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("payoutsCancel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelPayoutRequest](../../models/operations/cancelpayoutrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntityPayoutResponse](../../models/entitypayoutresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 409                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
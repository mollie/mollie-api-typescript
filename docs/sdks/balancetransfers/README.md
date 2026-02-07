# BalanceTransfers

## Overview

### Available Operations

* [create](#create) - Create a Connect balance transfer
* [list](#list) - List all Connect balance transfers
* [get](#get) - Get a Connect balance transfer

## create

This API endpoint allows you to create a balance transfer from your organization's balance to a connected organization's balance, or vice versa.
You can also create a balance transfer between two connected organizations.
To create a balance transfer, you must be authenticated as the source organization, and the destination organization must be a connected organization
that has authorized the `balance-transfers.write` scope for your organization.

### Example Usage: create-balance-transfer-200-1

<!-- UsageSnippet language="typescript" operationID="create-connect-balance-transfer" method="post" path="/connect/balance-transfers" example="create-balance-transfer-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.balanceTransfers.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    entityBalanceTransfer: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      source: {
        type: "organization",
        id: "org_1234567",
        description: "Invoice fee",
      },
      destination: {
        type: "organization",
        id: "org_1234567",
        description: "Invoice fee",
      },
      description: "Invoice fee",
      category: "invoice_collection",
      metadata: {
        "order_id": 12345,
        "customer_id": 9876,
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
import { balanceTransfersCreate } from "mollie-api-typescript/funcs/balanceTransfersCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await balanceTransfersCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    entityBalanceTransfer: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      source: {
        type: "organization",
        id: "org_1234567",
        description: "Invoice fee",
      },
      destination: {
        type: "organization",
        id: "org_1234567",
        description: "Invoice fee",
      },
      description: "Invoice fee",
      category: "invoice_collection",
      metadata: {
        "order_id": 12345,
        "customer_id": 9876,
      },
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("balanceTransfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: create-balance-transfer-422-1

<!-- UsageSnippet language="typescript" operationID="create-connect-balance-transfer" method="post" path="/connect/balance-transfers" example="create-balance-transfer-422-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.balanceTransfers.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    entityBalanceTransfer: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      source: {
        type: "organization",
        id: "org_1234567",
        description: "Invoice fee",
      },
      destination: {
        type: "organization",
        id: "org_1234567",
        description: "Invoice fee",
      },
      description: "Invoice fee",
      category: "invoice_collection",
      metadata: {
        "order_id": 12345,
        "customer_id": 9876,
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
import { balanceTransfersCreate } from "mollie-api-typescript/funcs/balanceTransfersCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await balanceTransfersCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    entityBalanceTransfer: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      source: {
        type: "organization",
        id: "org_1234567",
        description: "Invoice fee",
      },
      destination: {
        type: "organization",
        id: "org_1234567",
        description: "Invoice fee",
      },
      description: "Invoice fee",
      category: "invoice_collection",
      metadata: {
        "order_id": 12345,
        "customer_id": 9876,
      },
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("balanceTransfersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateConnectBalanceTransferRequest](../../models/operations/createconnectbalancetransferrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntityBalanceTransferResponse](../../models/entitybalancetransferresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 422                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## list

Returns a paginated list of balance transfers associated with your organization. These may be a balance transfer that was received or sent from your balance, or a balance transfer that you initiated on behalf of your clients. If no balance transfers are available, the resulting array will be empty. This request should never throw an error.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-connect-balance-transfers" method="get" path="/connect/balance-transfers" example="list-balance-transfer-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.balanceTransfers.list({
    limit: 50,
    sort: "desc",
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
import { balanceTransfersList } from "mollie-api-typescript/funcs/balanceTransfersList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await balanceTransfersList(client, {
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("balanceTransfersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListConnectBalanceTransfersRequest](../../models/operations/listconnectbalancetransfersrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListConnectBalanceTransfersResponse](../../models/operations/listconnectbalancetransfersresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieve a single Connect balance transfer object by its ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-connect-balance-transfer" method="get" path="/connect/balance-transfers/{balanceTransferId}" example="get-balance-transfer-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.balanceTransfers.get({
    balanceTransferId: "cbtr_j8NvRAM2WNZtsykpLEX8J",
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
import { balanceTransfersGet } from "mollie-api-typescript/funcs/balanceTransfersGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await balanceTransfersGet(client, {
    balanceTransferId: "cbtr_j8NvRAM2WNZtsykpLEX8J",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("balanceTransfersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConnectBalanceTransferRequest](../../models/operations/getconnectbalancetransferrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntityBalanceTransferResponse](../../models/entitybalancetransferresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
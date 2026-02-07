# Terminals

## Overview

### Available Operations

* [list](#list) - List terminals
* [get](#get) - Get terminal

## list

Retrieve a list of all physical point-of-sale devices.

The results are paginated.

### Example Usage: list-terminals-200-1

<!-- UsageSnippet language="typescript" operationID="list-terminals" method="get" path="/terminals" example="list-terminals-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.terminals.list({
    from: "term_vytxeTZskVKR7C7WgdSP3d",
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
import { terminalsList } from "mollie-api-typescript/funcs/terminalsList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await terminalsList(client, {
    from: "term_vytxeTZskVKR7C7WgdSP3d",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("terminalsList failed:", res.error);
  }
}

run();
```
### Example Usage: list-terminals-200-2

<!-- UsageSnippet language="typescript" operationID="list-terminals" method="get" path="/terminals" example="list-terminals-200-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.terminals.list({
    from: "term_vytxeTZskVKR7C7WgdSP3d",
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
import { terminalsList } from "mollie-api-typescript/funcs/terminalsList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await terminalsList(client, {
    from: "term_vytxeTZskVKR7C7WgdSP3d",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("terminalsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTerminalsRequest](../../models/operations/listterminalsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTerminalsResponse](../../models/operations/listterminalsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieve a single terminal by its ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-terminal" method="get" path="/terminals/{terminalId}" example="get-terminal-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.terminals.get({
    terminalId: "term_vytxeTZskVKR7C7WgdSP3d",
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
import { terminalsGet } from "mollie-api-typescript/funcs/terminalsGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await terminalsGet(client, {
    terminalId: "term_vytxeTZskVKR7C7WgdSP3d",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("terminalsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTerminalRequest](../../models/operations/getterminalrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntityTerminal](../../models/entityterminal.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
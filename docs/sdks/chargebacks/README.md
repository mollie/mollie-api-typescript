# Chargebacks

## Overview

### Available Operations

* [list](#list) - List payment chargebacks
* [get](#get) - Get payment chargeback
* [all](#all) - List all chargebacks

## list

Retrieve the chargebacks initiated for a specific payment.

The results are paginated.

### Example Usage: list-chargeback-200-1

<!-- UsageSnippet language="typescript" operationID="list-chargebacks" method="get" path="/payments/{paymentId}/chargebacks" example="list-chargeback-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.chargebacks.list({
    paymentId: "tr_5B8cwPMGnU",
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
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
import { chargebacksList } from "mollie-api-typescript/funcs/chargebacksList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await chargebacksList(client, {
    paymentId: "tr_5B8cwPMGnU",
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chargebacksList failed:", res.error);
  }
}

run();
```
### Example Usage: list-chargeback-200-2

<!-- UsageSnippet language="typescript" operationID="list-chargebacks" method="get" path="/payments/{paymentId}/chargebacks" example="list-chargeback-200-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.chargebacks.list({
    paymentId: "tr_5B8cwPMGnU",
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
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
import { chargebacksList } from "mollie-api-typescript/funcs/chargebacksList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await chargebacksList(client, {
    paymentId: "tr_5B8cwPMGnU",
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chargebacksList failed:", res.error);
  }
}

run();
```
### Example Usage: list-chargeback-200-3

<!-- UsageSnippet language="typescript" operationID="list-chargebacks" method="get" path="/payments/{paymentId}/chargebacks" example="list-chargeback-200-3" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.chargebacks.list({
    paymentId: "tr_5B8cwPMGnU",
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
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
import { chargebacksList } from "mollie-api-typescript/funcs/chargebacksList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await chargebacksList(client, {
    paymentId: "tr_5B8cwPMGnU",
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chargebacksList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListChargebacksRequest](../../models/operations/listchargebacksrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListChargebacksResponse](../../models/operations/listchargebacksresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 404                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieve a single payment chargeback by its ID and the ID of its parent payment.

### Example Usage: get-chargeback-200-1

<!-- UsageSnippet language="typescript" operationID="get-chargeback" method="get" path="/payments/{paymentId}/chargebacks/{chargebackId}" example="get-chargeback-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.chargebacks.get({
    paymentId: "tr_5B8cwPMGnU",
    chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
    embed: "payment",
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
import { chargebacksGet } from "mollie-api-typescript/funcs/chargebacksGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await chargebacksGet(client, {
    paymentId: "tr_5B8cwPMGnU",
    chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chargebacksGet failed:", res.error);
  }
}

run();
```
### Example Usage: get-chargeback-200-2

<!-- UsageSnippet language="typescript" operationID="get-chargeback" method="get" path="/payments/{paymentId}/chargebacks/{chargebackId}" example="get-chargeback-200-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.chargebacks.get({
    paymentId: "tr_5B8cwPMGnU",
    chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
    embed: "payment",
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
import { chargebacksGet } from "mollie-api-typescript/funcs/chargebacksGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await chargebacksGet(client, {
    paymentId: "tr_5B8cwPMGnU",
    chargebackId: "chb_xFzwUN4ci8HAmSGUACS4J",
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chargebacksGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetChargebackRequest](../../models/operations/getchargebackrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntityChargeback](../../models/entitychargeback.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## all

Retrieve all chargebacks initiated for all your payments.

The results are paginated.

### Example Usage: list-all-chargebacks-200-1

<!-- UsageSnippet language="typescript" operationID="list-all-chargebacks" method="get" path="/chargebacks" example="list-all-chargebacks-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.chargebacks.all({
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
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
import { chargebacksAll } from "mollie-api-typescript/funcs/chargebacksAll.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await chargebacksAll(client, {
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chargebacksAll failed:", res.error);
  }
}

run();
```
### Example Usage: list-all-chargebacks-200-2

<!-- UsageSnippet language="typescript" operationID="list-all-chargebacks" method="get" path="/chargebacks" example="list-all-chargebacks-200-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.chargebacks.all({
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
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
import { chargebacksAll } from "mollie-api-typescript/funcs/chargebacksAll.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await chargebacksAll(client, {
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chargebacksAll failed:", res.error);
  }
}

run();
```
### Example Usage: list-all-chargebacks-200-3

<!-- UsageSnippet language="typescript" operationID="list-all-chargebacks" method="get" path="/chargebacks" example="list-all-chargebacks-200-3" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.chargebacks.all({
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
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
import { chargebacksAll } from "mollie-api-typescript/funcs/chargebacksAll.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  profileId: "pfl_5B8cwPMGnU",
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await chargebacksAll(client, {
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chargebacksAll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAllChargebacksRequest](../../models/operations/listallchargebacksrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAllChargebacksResponse](../../models/operations/listallchargebacksresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 404                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
# Settlements

## Overview

### Available Operations

* [list](#list) - List settlements
* [get](#get) - Get settlement
* [getOpen](#getopen) - Get open settlement
* [getNext](#getnext) - Get next settlement
* [listPayments](#listpayments) - List settlement payments
* [listCaptures](#listcaptures) - List settlement captures
* [listRefunds](#listrefunds) - List settlement refunds
* [listChargebacks](#listchargebacks) - List settlement chargebacks

## list

Retrieve a list of all your settlements.

The results are paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-settlements" method="get" path="/settlements" example="list-settlements-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.settlements.list({
    from: "stl_jDk30akdN",
    limit: 50,
    balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
    year: "2025",
    month: "1",
    currencies: "EUR",
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
import { settlementsList } from "mollie-api-typescript/funcs/settlementsList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await settlementsList(client, {
    from: "stl_jDk30akdN",
    limit: 50,
    balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
    year: "2025",
    month: "1",
    currencies: "EUR",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSettlementsRequest](../../models/operations/listsettlementsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSettlementsResponse](../../models/operations/listsettlementsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 404                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieve a single settlement by its ID.

To lookup settlements by their bank reference, replace the ID in the URL by
a reference. For example: `1234567.2404.03`.

A settlement represents a transfer of your balance funds to your external bank account.

Settlements will typically include a report that details what balance transactions have taken place between this
settlement and the previous one.

For more accurate bookkeeping, refer to the [balance report](get-balance-report) endpoint or the
[balance transactions](list-balance-transactions) endpoint.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-settlement" method="get" path="/settlements/{settlementId}" example="get-settlement-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.settlements.get({
    settlementId: "stl_5B8cwPMGnU",
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
import { settlementsGet } from "mollie-api-typescript/funcs/settlementsGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await settlementsGet(client, {
    settlementId: "stl_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSettlementRequest](../../models/operations/getsettlementrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntitySettlement](../../models/entitysettlement.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## getOpen

Retrieve the details of the open balance of the organization. This will return a settlement object representing your
organization's balance.

For a complete reference of the settlement object, refer to the [Get settlement endpoint](get-settlement)
documentation.

For more accurate bookkeeping, refer to the [balance report](get-balance-report) endpoint or the
[balance transactions](list-balance-transactions) endpoint.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-open-settlement" method="get" path="/settlements/open" example="get-settlement-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.settlements.getOpen({
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
import { settlementsGetOpen } from "mollie-api-typescript/funcs/settlementsGetOpen.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await settlementsGetOpen(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsGetOpen failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOpenSettlementRequest](../../models/operations/getopensettlementrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntitySettlement](../../models/entitysettlement.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## getNext

Retrieve the details of the current settlement, that has not yet been paid out.

For a complete reference of the settlement object, refer to the [Get settlement endpoint](get-settlement)
documentation.

For more accurate bookkeeping, refer to the [balance report](get-balance-report) endpoint or the
[balance transactions](list-balance-transactions) endpoint.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-next-settlement" method="get" path="/settlements/next" example="get-settlement-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.settlements.getNext({
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
import { settlementsGetNext } from "mollie-api-typescript/funcs/settlementsGetNext.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await settlementsGetNext(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsGetNext failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetNextSettlementRequest](../../models/operations/getnextsettlementrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntitySettlement](../../models/entitysettlement.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## listPayments

Retrieve all payments included in the given settlement.

The response is in the same format as the response of the [List payments endpoint](list-payments).

For capture-based payment methods such as Klarna, the payments are not listed here. Refer to the
[List captures endpoint](list-captures) endpoint instead.

### Example Usage: list-payments-200-1

<!-- UsageSnippet language="typescript" operationID="list-settlement-payments" method="get" path="/settlements/{settlementId}/payments" example="list-payments-200-1" -->
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
  const result = await client.settlements.listPayments({
    settlementId: "stl_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
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
import { settlementsListPayments } from "mollie-api-typescript/funcs/settlementsListPayments.js";

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
  const res = await settlementsListPayments(client, {
    settlementId: "stl_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsListPayments failed:", res.error);
  }
}

run();
```
### Example Usage: list-payments-200-2

<!-- UsageSnippet language="typescript" operationID="list-settlement-payments" method="get" path="/settlements/{settlementId}/payments" example="list-payments-200-2" -->
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
  const result = await client.settlements.listPayments({
    settlementId: "stl_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
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
import { settlementsListPayments } from "mollie-api-typescript/funcs/settlementsListPayments.js";

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
  const res = await settlementsListPayments(client, {
    settlementId: "stl_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsListPayments failed:", res.error);
  }
}

run();
```
### Example Usage: list-payments-200-3

<!-- UsageSnippet language="typescript" operationID="list-settlement-payments" method="get" path="/settlements/{settlementId}/payments" example="list-payments-200-3" -->
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
  const result = await client.settlements.listPayments({
    settlementId: "stl_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
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
import { settlementsListPayments } from "mollie-api-typescript/funcs/settlementsListPayments.js";

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
  const res = await settlementsListPayments(client, {
    settlementId: "stl_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsListPayments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSettlementPaymentsRequest](../../models/operations/listsettlementpaymentsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSettlementPaymentsResponse](../../models/operations/listsettlementpaymentsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## listCaptures

Retrieve all captures included in the given settlement.

The response is in the same format as the response of the [List captures endpoint](list-captures).

### Example Usage: list-captures-200-1

<!-- UsageSnippet language="typescript" operationID="list-settlement-captures" method="get" path="/settlements/{settlementId}/captures" example="list-captures-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.settlements.listCaptures({
    settlementId: "stl_5B8cwPMGnU",
    from: "cpt_vytxeTZskVKR7C7WgdSP3d",
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
import { settlementsListCaptures } from "mollie-api-typescript/funcs/settlementsListCaptures.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await settlementsListCaptures(client, {
    settlementId: "stl_5B8cwPMGnU",
    from: "cpt_vytxeTZskVKR7C7WgdSP3d",
    limit: 50,
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsListCaptures failed:", res.error);
  }
}

run();
```
### Example Usage: list-captures-200-2

<!-- UsageSnippet language="typescript" operationID="list-settlement-captures" method="get" path="/settlements/{settlementId}/captures" example="list-captures-200-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.settlements.listCaptures({
    settlementId: "stl_5B8cwPMGnU",
    from: "cpt_vytxeTZskVKR7C7WgdSP3d",
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
import { settlementsListCaptures } from "mollie-api-typescript/funcs/settlementsListCaptures.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await settlementsListCaptures(client, {
    settlementId: "stl_5B8cwPMGnU",
    from: "cpt_vytxeTZskVKR7C7WgdSP3d",
    limit: 50,
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsListCaptures failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSettlementCapturesRequest](../../models/operations/listsettlementcapturesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSettlementCapturesResponse](../../models/operations/listsettlementcapturesresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 404                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## listRefunds

Retrieve all refunds 'deducted' from the given settlement.

The response is in the same format as the response of the [List refunds endpoint](list-refunds).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-settlement-refunds" method="get" path="/settlements/{settlementId}/refunds" example="list-refunds-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.settlements.listRefunds({
    settlementId: "stl_5B8cwPMGnU",
    from: "re_5B8cwPMGnU",
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
import { settlementsListRefunds } from "mollie-api-typescript/funcs/settlementsListRefunds.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await settlementsListRefunds(client, {
    settlementId: "stl_5B8cwPMGnU",
    from: "re_5B8cwPMGnU",
    limit: 50,
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsListRefunds failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSettlementRefundsRequest](../../models/operations/listsettlementrefundsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSettlementRefundsResponse](../../models/operations/listsettlementrefundsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 404                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## listChargebacks

Retrieve all chargebacks 'deducted' from the given settlement.

The response is in the same format as the response of the [List chargebacks endpoint](list-chargebacks).

### Example Usage: list-chargeback-200-1

<!-- UsageSnippet language="typescript" operationID="list-settlement-chargebacks" method="get" path="/settlements/{settlementId}/chargebacks" example="list-chargeback-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.settlements.listChargebacks({
    settlementId: "stl_5B8cwPMGnU",
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
import { settlementsListChargebacks } from "mollie-api-typescript/funcs/settlementsListChargebacks.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await settlementsListChargebacks(client, {
    settlementId: "stl_5B8cwPMGnU",
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsListChargebacks failed:", res.error);
  }
}

run();
```
### Example Usage: list-chargeback-200-2

<!-- UsageSnippet language="typescript" operationID="list-settlement-chargebacks" method="get" path="/settlements/{settlementId}/chargebacks" example="list-chargeback-200-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.settlements.listChargebacks({
    settlementId: "stl_5B8cwPMGnU",
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
import { settlementsListChargebacks } from "mollie-api-typescript/funcs/settlementsListChargebacks.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await settlementsListChargebacks(client, {
    settlementId: "stl_5B8cwPMGnU",
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsListChargebacks failed:", res.error);
  }
}

run();
```
### Example Usage: list-chargeback-200-3

<!-- UsageSnippet language="typescript" operationID="list-settlement-chargebacks" method="get" path="/settlements/{settlementId}/chargebacks" example="list-chargeback-200-3" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.settlements.listChargebacks({
    settlementId: "stl_5B8cwPMGnU",
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
import { settlementsListChargebacks } from "mollie-api-typescript/funcs/settlementsListChargebacks.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await settlementsListChargebacks(client, {
    settlementId: "stl_5B8cwPMGnU",
    from: "chb_xFzwUN4ci8HAmSGUACS4J",
    limit: 50,
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("settlementsListChargebacks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSettlementChargebacksRequest](../../models/operations/listsettlementchargebacksrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSettlementChargebacksResponse](../../models/operations/listsettlementchargebacksresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 404                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
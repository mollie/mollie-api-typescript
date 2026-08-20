# DraftTransfers

## Overview

### Available Operations

* [create](#create) - Create draft transfer
* [list](#list) - List draft transfers
* [get](#get) - Get draft transfer
* [cancel](#cancel) - Cancel draft transfer

## create

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Creates a draft transfer. The draft transfer immediately enters `pending-review` and appears in the
initiator's queue in Mollie Apps. It carries no legal weight and moves no funds until a human initiator
approves it there.

### Test mode

Creating a draft transfer always returns a synthetic draft in `pending-review`, using synthetic data,
same as in live mode. No real funds move and nothing is sent to Mollie Apps.

Shortly after, you can simulate the initiator's decision by adjusting the transfer amount:

| Amount  | Simulated outcome                                    | Webhook sequence                                                                                  |
|---------|-------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| `13.00` | Declined by the initiator, with a free-text reason     | `business-account-draft-transfer.created` → `business-account-draft-transfer.declined`             |
| Other   | Approved by the initiator                              | `business-account-draft-transfer.created` → `business-account-draft-transfer.approved`              |

The webhooks fire asynchronously, with a short delay between them to mimic real timing. [Get](get-draft-transfer)
and [list](list-draft-transfers) reflect the simulated outcome once it lands.

Cancelling (via `DELETE`) is unaffected by the amount: it always transitions the draft to `declined` with
`statusReason.code` set to `deleted-by-creator`, the same as in live mode.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-draft-transfer" method="post" path="/v2/business-accounts/draft-transfers" example="create-draft-transfer-201" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.draftTransfers.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    createDraftTransferRequest: {
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
      scheduledExecutionDate: new RFCDate("2025-03-01"),
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
import { draftTransfersCreate } from "mollie-api-typescript/funcs/draftTransfersCreate.js";
import { RFCDate } from "mollie-api-typescript/types";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await draftTransfersCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    createDraftTransferRequest: {
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
      scheduledExecutionDate: new RFCDate("2025-03-01"),
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("draftTransfersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDraftTransferRequest](../../models/operations/createdrafttransferrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DraftTransferResponse](../../models/drafttransferresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 422, 429                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## list

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Retrieves a list of draft transfers created via this API for the organization.

The results are paginated.

In test mode, this returns synthetic draft transfers only, not your real data. See [Create draft
transfer](create-draft-transfer) for how to simulate `approved` and `declined` outcomes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-draft-transfers" method="get" path="/v2/business-accounts/draft-transfers" example="list-draft-transfers-200" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: true,
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.draftTransfers.list({
    limit: 50,
    status: "approved",
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
import { draftTransfersList } from "mollie-api-typescript/funcs/draftTransfersList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: true,
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await draftTransfersList(client, {
    limit: 50,
    status: "approved",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("draftTransfersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDraftTransfersRequest](../../models/operations/listdrafttransfersrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListDraftTransfersResponse](../../models/operations/listdrafttransfersresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 429                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Retrieves a single draft transfer by its identifier.

Only draft transfers created via this API are visible via this endpoint. Draft transfers created in Mollie
Apps return a `404`, even though they appear in the [list endpoint](list-draft-transfers).

In test mode, this returns synthetic data only, not your real draft transfer. See [Create draft
transfer](create-draft-transfer) for how to simulate `approved` and `declined` outcomes.

### Example Usage: approved-draft-transfer

<!-- UsageSnippet language="typescript" operationID="get-draft-transfer" method="get" path="/v2/business-accounts/draft-transfers/{draftTransferId}" example="approved-draft-transfer" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: true,
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.draftTransfers.get({
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
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
import { draftTransfersGet } from "mollie-api-typescript/funcs/draftTransfersGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await draftTransfersGet(client, {
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("draftTransfersGet failed:", res.error);
  }
}

run();
```
### Example Usage: declined-by-initiator-draft-transfer

<!-- UsageSnippet language="typescript" operationID="get-draft-transfer" method="get" path="/v2/business-accounts/draft-transfers/{draftTransferId}" example="declined-by-initiator-draft-transfer" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.draftTransfers.get({
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
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
import { draftTransfersGet } from "mollie-api-typescript/funcs/draftTransfersGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: true,
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await draftTransfersGet(client, {
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("draftTransfersGet failed:", res.error);
  }
}

run();
```
### Example Usage: get-draft-transfer-200

<!-- UsageSnippet language="typescript" operationID="get-draft-transfer" method="get" path="/v2/business-accounts/draft-transfers/{draftTransferId}" example="get-draft-transfer-200" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: true,
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.draftTransfers.get({
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
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
import { draftTransfersGet } from "mollie-api-typescript/funcs/draftTransfersGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: true,
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await draftTransfersGet(client, {
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("draftTransfersGet failed:", res.error);
  }
}

run();
```
### Example Usage: initiated-draft-transfer

<!-- UsageSnippet language="typescript" operationID="get-draft-transfer" method="get" path="/v2/business-accounts/draft-transfers/{draftTransferId}" example="initiated-draft-transfer" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.draftTransfers.get({
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
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
import { draftTransfersGet } from "mollie-api-typescript/funcs/draftTransfersGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await draftTransfersGet(client, {
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("draftTransfersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDraftTransferRequest](../../models/operations/getdrafttransferrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DraftTransferResponse](../../models/drafttransferresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 429                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## cancel

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Cancels a draft transfer created via this API. Transitions the draft transfer to `declined` with
`statusReason.code` set to `deleted-by-creator`.

Only draft transfers created via this API, and still in `pending-review`, can be cancelled this way. A
`422` is returned if the initiator has already started approving it.

In test mode, this always returns a synthetic `declined` draft. See [Create draft
transfer](create-draft-transfer) for how to simulate `approved` and `declined` outcomes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancel-draft-transfer" method="delete" path="/v2/business-accounts/draft-transfers/{draftTransferId}" example="cancel-draft-transfer-200" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.draftTransfers.cancel({
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
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
import { draftTransfersCancel } from "mollie-api-typescript/funcs/draftTransfersCancel.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    advancedAccessToken: process.env["CLIENT_ADVANCED_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await draftTransfersCancel(client, {
    draftTransferId: "badrt_87GByBuj4UCcUTEbs6aGJ",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("draftTransfersCancel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelDraftTransferRequest](../../models/operations/canceldrafttransferrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DraftTransferResponse](../../models/drafttransferresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 422, 429             | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
# Refunds

## Overview

### Available Operations

* [create](#create) - Create payment refund
* [list](#list) - List payment refunds
* [get](#get) - Get payment refund
* [cancel](#cancel) - Cancel payment refund
* [all](#all) - List all refunds

## create

Creates a refund for a specific payment. The refunded amount is credited to your customer usually either via a bank
transfer or by refunding the amount to your customer's credit card.

### Example Usage: create-refund-201-1

<!-- UsageSnippet language="typescript" operationID="create-refund" method="post" path="/payments/{paymentId}/refunds" example="create-refund-201-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.refunds.create({
    paymentId: "tr_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    refundRequest: {
      description: "Refunding a Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      metadata: {

      },
      externalReference: {
        type: "acquirer-reference",
        id: "123456789012345",
      },
      reverseRouting: false,
      routingReversals: [
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          source: {
            type: "organization",
            organizationId: "org_1234567",
          },
        },
      ],
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
import { refundsCreate } from "mollie-api-typescript/funcs/refundsCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await refundsCreate(client, {
    paymentId: "tr_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    refundRequest: {
      description: "Refunding a Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      metadata: {
  
      },
      externalReference: {
        type: "acquirer-reference",
        id: "123456789012345",
      },
      reverseRouting: false,
      routingReversals: [
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          source: {
            type: "organization",
            organizationId: "org_1234567",
          },
        },
      ],
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("refundsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: create-refund-201-2

<!-- UsageSnippet language="typescript" operationID="create-refund" method="post" path="/payments/{paymentId}/refunds" example="create-refund-201-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.refunds.create({
    paymentId: "tr_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    refundRequest: {
      description: "Refunding a Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      metadata: {

      },
      externalReference: {
        type: "acquirer-reference",
        id: "123456789012345",
      },
      reverseRouting: false,
      routingReversals: [
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          source: {
            type: "organization",
            organizationId: "org_1234567",
          },
        },
      ],
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
import { refundsCreate } from "mollie-api-typescript/funcs/refundsCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await refundsCreate(client, {
    paymentId: "tr_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    refundRequest: {
      description: "Refunding a Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      metadata: {
  
      },
      externalReference: {
        type: "acquirer-reference",
        id: "123456789012345",
      },
      reverseRouting: false,
      routingReversals: [
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          source: {
            type: "organization",
            organizationId: "org_1234567",
          },
        },
      ],
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("refundsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRefundRequest](../../models/operations/createrefundrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntityRefundResponse](../../models/entityrefundresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 409, 422             | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## list

Retrieve a list of all refunds created for a specific payment.

The results are paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-refunds" method="get" path="/payments/{paymentId}/refunds" example="list-refunds-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.refunds.list({
    paymentId: "tr_5B8cwPMGnU",
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
import { refundsList } from "mollie-api-typescript/funcs/refundsList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await refundsList(client, {
    paymentId: "tr_5B8cwPMGnU",
    from: "re_5B8cwPMGnU",
    limit: 50,
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("refundsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRefundsRequest](../../models/operations/listrefundsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListRefundsResponse](../../models/operations/listrefundsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 404                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieve a single payment refund by its ID and the ID of its parent payment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-refund" method="get" path="/payments/{paymentId}/refunds/{refundId}" example="get-refund-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.refunds.get({
    paymentId: "tr_5B8cwPMGnU",
    refundId: "re_5B8cwPMGnU",
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
import { refundsGet } from "mollie-api-typescript/funcs/refundsGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await refundsGet(client, {
    paymentId: "tr_5B8cwPMGnU",
    refundId: "re_5B8cwPMGnU",
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("refundsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRefundRequest](../../models/operations/getrefundrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntityRefundResponse](../../models/entityrefundresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## cancel

Refunds will be executed with a delay of two hours. Until that time, refunds may be canceled manually via the
Mollie Dashboard, or by using this endpoint.

A refund can only be canceled while its `status` field is either `queued` or `pending`. See the
[Get refund endpoint](get-refund) for more information.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancel-refund" method="delete" path="/payments/{paymentId}/refunds/{refundId}" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  await client.refunds.cancel({
    paymentId: "tr_5B8cwPMGnU",
    refundId: "re_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { refundsCancel } from "mollie-api-typescript/funcs/refundsCancel.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await refundsCancel(client, {
    paymentId: "tr_5B8cwPMGnU",
    refundId: "re_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("refundsCancel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelRefundRequest](../../models/operations/cancelrefundrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## all

Retrieve a list of all of your refunds.

The results are paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-all-refunds" method="get" path="/refunds" example="list-refunds-200-1" -->
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
  const result = await client.refunds.all({
    from: "re_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
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
import { refundsAll } from "mollie-api-typescript/funcs/refundsAll.js";

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
  const res = await refundsAll(client, {
    from: "re_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    embed: "payment",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("refundsAll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAllRefundsRequest](../../models/operations/listallrefundsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAllRefundsResponse](../../models/operations/listallrefundsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
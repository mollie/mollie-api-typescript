# Subscriptions

## Overview

### Available Operations

* [create](#create) - Create subscription
* [list](#list) - List customer subscriptions
* [get](#get) - Get subscription
* [update](#update) - Update subscription
* [cancel](#cancel) - Cancel subscription
* [all](#all) - List all subscriptions
* [listPayments](#listpayments) - List subscription payments

## create

With subscriptions, you can schedule recurring payments to take place at regular intervals.

For example, by simply specifying an `amount` and an `interval`, you can create an endless subscription to charge a
monthly fee, until you cancel the subscription.

Or, you could use the times parameter to only charge a limited number of times, for example to split a big
transaction in multiple parts.

A few example usages:

`amount[currency]="EUR"` `amount[value]="5.00"` `interval="2 weeks"`
Your customer will be charged €5 once every two weeks.

`amount[currency]="EUR"` `amount[value]="20.00"` `interval="1 day" times=5`
Your customer will be charged €20 every day, for five consecutive days.

`amount[currency]="EUR"` `amount[value]="10.00"` `interval="1 month"`
`startDate="2018-04-30"`
Your customer will be charged €10 on the last day of each month, starting in April 2018.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-subscription" method="post" path="/customers/{customerId}/subscriptions" example="get-subscription-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.subscriptions.create({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    subscriptionRequest: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      times: 6,
      interval: "2 days",
      startDate: "2025-01-01",
      description: "Subscription of streaming channel",
      method: "paypal",
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "Platform fee",
      },
      webhookUrl: "https://example.com/webhook",
      mandateId: "mdt_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
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
import { subscriptionsCreate } from "mollie-api-typescript/funcs/subscriptionsCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsCreate(client, {
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    subscriptionRequest: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      times: 6,
      interval: "2 days",
      startDate: "2025-01-01",
      description: "Subscription of streaming channel",
      method: "paypal",
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "Platform fee",
      },
      webhookUrl: "https://example.com/webhook",
      mandateId: "mdt_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSubscriptionRequest](../../models/operations/createsubscriptionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SubscriptionResponse](../../models/subscriptionresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## list

Retrieve all subscriptions of a customer.

The results are paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-subscriptions" method="get" path="/customers/{customerId}/subscriptions" example="list-subscriptions-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.subscriptions.list({
    customerId: "cst_5B8cwPMGnU",
    from: "sub_5B8cwPMGnU",
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
import { subscriptionsList } from "mollie-api-typescript/funcs/subscriptionsList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsList(client, {
    customerId: "cst_5B8cwPMGnU",
    from: "sub_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSubscriptionsRequest](../../models/operations/listsubscriptionsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSubscriptionsResponse](../../models/operations/listsubscriptionsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 404                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieve a single subscription by its ID and the ID of its parent customer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-subscription" method="get" path="/customers/{customerId}/subscriptions/{subscriptionId}" example="get-subscription-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.subscriptions.get({
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
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
import { subscriptionsGet } from "mollie-api-typescript/funcs/subscriptionsGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsGet(client, {
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSubscriptionRequest](../../models/operations/getsubscriptionrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SubscriptionResponse](../../models/subscriptionresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## update

Update an existing subscription.

Canceled subscriptions cannot be updated.

For an in-depth explanation of each parameter, refer to the [Create subscription](create-subscription) endpoint.

### Example Usage: update-subscription-200-1

<!-- UsageSnippet language="typescript" operationID="update-subscription" method="patch" path="/customers/{customerId}/subscriptions/{subscriptionId}" example="update-subscription-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.subscriptions.update({
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      description: "Subscription of streaming channel",
      interval: "1 months",
      startDate: "2025-01-01",
      times: 6,
      webhookUrl: "https://example.com/webhook",
      mandateId: "mdt_5B8cwPMGnU",
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
import { subscriptionsUpdate } from "mollie-api-typescript/funcs/subscriptionsUpdate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsUpdate(client, {
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      description: "Subscription of streaming channel",
      interval: "1 months",
      startDate: "2025-01-01",
      times: 6,
      webhookUrl: "https://example.com/webhook",
      mandateId: "mdt_5B8cwPMGnU",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: update-subscription-200-2

<!-- UsageSnippet language="typescript" operationID="update-subscription" method="patch" path="/customers/{customerId}/subscriptions/{subscriptionId}" example="update-subscription-200-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.subscriptions.update({
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      description: "Subscription of streaming channel",
      interval: "1 months",
      startDate: "2025-01-01",
      times: 6,
      webhookUrl: "https://example.com/webhook",
      mandateId: "mdt_5B8cwPMGnU",
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
import { subscriptionsUpdate } from "mollie-api-typescript/funcs/subscriptionsUpdate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsUpdate(client, {
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      description: "Subscription of streaming channel",
      interval: "1 months",
      startDate: "2025-01-01",
      times: 6,
      webhookUrl: "https://example.com/webhook",
      mandateId: "mdt_5B8cwPMGnU",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSubscriptionRequest](../../models/operations/updatesubscriptionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SubscriptionResponse](../../models/subscriptionresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## cancel

Cancel an existing subscription. Canceling a subscription has no effect on the mandates of the customer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancel-subscription" method="delete" path="/customers/{customerId}/subscriptions/{subscriptionId}" example="cancel-subscription-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.subscriptions.cancel({
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
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
import { subscriptionsCancel } from "mollie-api-typescript/funcs/subscriptionsCancel.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await subscriptionsCancel(client, {
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsCancel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelSubscriptionRequest](../../models/operations/cancelsubscriptionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SubscriptionResponse](../../models/subscriptionresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## all

Retrieve all subscriptions initiated across all your customers.

The results are paginated.

### Example Usage: list-payments-200-1

<!-- UsageSnippet language="typescript" operationID="list-all-subscriptions" method="get" path="/subscriptions" example="list-payments-200-1" -->
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
  const result = await client.subscriptions.all({
    from: "tr_5B8cwPMGnU",
    limit: 50,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { subscriptionsAll } from "mollie-api-typescript/funcs/subscriptionsAll.js";

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
  const res = await subscriptionsAll(client, {
    from: "tr_5B8cwPMGnU",
    limit: 50,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsAll failed:", res.error);
  }
}

run();
```
### Example Usage: list-payments-200-2

<!-- UsageSnippet language="typescript" operationID="list-all-subscriptions" method="get" path="/subscriptions" example="list-payments-200-2" -->
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
  const result = await client.subscriptions.all({
    from: "tr_5B8cwPMGnU",
    limit: 50,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { subscriptionsAll } from "mollie-api-typescript/funcs/subscriptionsAll.js";

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
  const res = await subscriptionsAll(client, {
    from: "tr_5B8cwPMGnU",
    limit: 50,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsAll failed:", res.error);
  }
}

run();
```
### Example Usage: list-payments-200-3

<!-- UsageSnippet language="typescript" operationID="list-all-subscriptions" method="get" path="/subscriptions" example="list-payments-200-3" -->
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
  const result = await client.subscriptions.all({
    from: "tr_5B8cwPMGnU",
    limit: 50,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { subscriptionsAll } from "mollie-api-typescript/funcs/subscriptionsAll.js";

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
  const res = await subscriptionsAll(client, {
    from: "tr_5B8cwPMGnU",
    limit: 50,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsAll failed:", res.error);
  }
}

run();
```
### Example Usage: list-subscriptions-200-1

<!-- UsageSnippet language="typescript" operationID="list-all-subscriptions" method="get" path="/subscriptions" example="list-subscriptions-200-1" -->
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
  const result = await client.subscriptions.all({
    from: "sub_rVKGtNd6s3",
    limit: 50,
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
import { subscriptionsAll } from "mollie-api-typescript/funcs/subscriptionsAll.js";

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
  const res = await subscriptionsAll(client, {
    from: "sub_rVKGtNd6s3",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsAll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAllSubscriptionsRequest](../../models/operations/listallsubscriptionsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListAllSubscriptionsResponse](../../models/operations/listallsubscriptionsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 404                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## listPayments

Retrieve all payments of a specific subscription.

The results are paginated.

### Example Usage: list-payments-200-1

<!-- UsageSnippet language="typescript" operationID="list-subscription-payments" method="get" path="/customers/{customerId}/subscriptions/{subscriptionId}/payments" example="list-payments-200-1" -->
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
  const result = await client.subscriptions.listPayments({
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
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
import { subscriptionsListPayments } from "mollie-api-typescript/funcs/subscriptionsListPayments.js";

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
  const res = await subscriptionsListPayments(client, {
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsListPayments failed:", res.error);
  }
}

run();
```
### Example Usage: list-payments-200-2

<!-- UsageSnippet language="typescript" operationID="list-subscription-payments" method="get" path="/customers/{customerId}/subscriptions/{subscriptionId}/payments" example="list-payments-200-2" -->
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
  const result = await client.subscriptions.listPayments({
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
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
import { subscriptionsListPayments } from "mollie-api-typescript/funcs/subscriptionsListPayments.js";

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
  const res = await subscriptionsListPayments(client, {
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsListPayments failed:", res.error);
  }
}

run();
```
### Example Usage: list-payments-200-3

<!-- UsageSnippet language="typescript" operationID="list-subscription-payments" method="get" path="/customers/{customerId}/subscriptions/{subscriptionId}/payments" example="list-payments-200-3" -->
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
  const result = await client.subscriptions.listPayments({
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
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
import { subscriptionsListPayments } from "mollie-api-typescript/funcs/subscriptionsListPayments.js";

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
  const res = await subscriptionsListPayments(client, {
    customerId: "cst_5B8cwPMGnU",
    subscriptionId: "sub_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriptionsListPayments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSubscriptionPaymentsRequest](../../models/operations/listsubscriptionpaymentsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSubscriptionPaymentsResponse](../../models/operations/listsubscriptionpaymentsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
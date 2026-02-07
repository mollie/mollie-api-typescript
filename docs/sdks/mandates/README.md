# Mandates

## Overview

### Available Operations

* [create](#create) - Create mandate
* [list](#list) - List mandates
* [get](#get) - Get mandate
* [revoke](#revoke) - Revoke mandate

## create

Create a mandate for a specific customer. Mandates allow you to charge a customer's card, PayPal account or bank
account recurrently.

It is only possible to create mandates for IBANs and PayPal billing agreements with this endpoint. To create
mandates for cards, your customers need to perform a 'first payment' with their card.

### Example Usage: create-mandate-201-1

<!-- UsageSnippet language="typescript" operationID="create-mandate" method="post" path="/customers/{customerId}/mandates" example="create-mandate-201-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.mandates.create({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    mandateRequest: {
      id: "mdt_5B8cwPMGnU",
      method: "directdebit",
      consumerName: "John Doe",
      consumerAccount: "NL55INGB0000000000",
      consumerBic: "BANKBIC",
      consumerEmail: "example@email.com",
      signatureDate: "2025-01-01",
      mandateReference: "ID-1023892",
      paypalBillingAgreementId: "B-12A34567B8901234CD",
      payPalVaultId: "8kk8451t",
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
import { mandatesCreate } from "mollie-api-typescript/funcs/mandatesCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await mandatesCreate(client, {
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    mandateRequest: {
      id: "mdt_5B8cwPMGnU",
      method: "directdebit",
      consumerName: "John Doe",
      consumerAccount: "NL55INGB0000000000",
      consumerBic: "BANKBIC",
      consumerEmail: "example@email.com",
      signatureDate: "2025-01-01",
      mandateReference: "ID-1023892",
      paypalBillingAgreementId: "B-12A34567B8901234CD",
      payPalVaultId: "8kk8451t",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mandatesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: create-mandate-201-2

<!-- UsageSnippet language="typescript" operationID="create-mandate" method="post" path="/customers/{customerId}/mandates" example="create-mandate-201-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.mandates.create({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    mandateRequest: {
      id: "mdt_5B8cwPMGnU",
      method: "directdebit",
      consumerName: "John Doe",
      consumerAccount: "NL55INGB0000000000",
      consumerBic: "BANKBIC",
      consumerEmail: "example@email.com",
      signatureDate: "2025-01-01",
      mandateReference: "ID-1023892",
      paypalBillingAgreementId: "B-12A34567B8901234CD",
      payPalVaultId: "8kk8451t",
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
import { mandatesCreate } from "mollie-api-typescript/funcs/mandatesCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await mandatesCreate(client, {
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    mandateRequest: {
      id: "mdt_5B8cwPMGnU",
      method: "directdebit",
      consumerName: "John Doe",
      consumerAccount: "NL55INGB0000000000",
      consumerBic: "BANKBIC",
      consumerEmail: "example@email.com",
      signatureDate: "2025-01-01",
      mandateReference: "ID-1023892",
      paypalBillingAgreementId: "B-12A34567B8901234CD",
      payPalVaultId: "8kk8451t",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mandatesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateMandateRequest](../../models/operations/createmandaterequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MandateResponse](../../models/mandateresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## list

Retrieve a list of all mandates.

The results are paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-mandates" method="get" path="/customers/{customerId}/mandates" example="list-mandates-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.mandates.list({
    customerId: "cst_5B8cwPMGnU",
    from: "mdt_5B8cwPMGnU",
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
import { mandatesList } from "mollie-api-typescript/funcs/mandatesList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await mandatesList(client, {
    customerId: "cst_5B8cwPMGnU",
    from: "mdt_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mandatesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMandatesRequest](../../models/operations/listmandatesrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMandatesResponse](../../models/operations/listmandatesresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 404                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieve a single mandate by its ID. Depending on the type of mandate, the object will contain the customer's bank
account details, card details, or PayPal account details.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-mandate" method="get" path="/customers/{customerId}/mandates/{mandateId}" example="get-mandate-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.mandates.get({
    customerId: "cst_5B8cwPMGnU",
    mandateId: "mdt_5B8cwPMGnU",
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
import { mandatesGet } from "mollie-api-typescript/funcs/mandatesGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await mandatesGet(client, {
    customerId: "cst_5B8cwPMGnU",
    mandateId: "mdt_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("mandatesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMandateRequest](../../models/operations/getmandaterequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MandateResponse](../../models/mandateresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## revoke

Revoke a customer's mandate. You will no longer be able to charge the customer's bank account or card with this
mandate, and all connected subscriptions will be canceled.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="revoke-mandate" method="delete" path="/customers/{customerId}/mandates/{mandateId}" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  await client.mandates.revoke({
    customerId: "cst_5B8cwPMGnU",
    mandateId: "mdt_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      testmode: false,
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { mandatesRevoke } from "mollie-api-typescript/funcs/mandatesRevoke.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await mandatesRevoke(client, {
    customerId: "cst_5B8cwPMGnU",
    mandateId: "mdt_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("mandatesRevoke failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RevokeMandateRequest](../../models/operations/revokemandaterequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
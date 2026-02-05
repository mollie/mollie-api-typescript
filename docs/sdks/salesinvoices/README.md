# SalesInvoices

## Overview

### Available Operations

* [create](#create) - Create sales invoice
* [list](#list) - List sales invoices
* [get](#get) - Get sales invoice
* [update](#update) - Update sales invoice
* [delete](#delete) - Delete sales invoice

## create

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

With the Sales Invoice API you can generate sales invoices to send to your customers.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-sales-invoice" method="post" path="/sales-invoices" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.salesInvoices.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    salesInvoiceRequest: {
      testmode: false,
      profileId: "pfl_QkEhN94Ba",
      status: "draft",
      vatScheme: "standard",
      vatMode: "exclusive",
      memo: "This is a memo!",
      paymentTerm: "30 days",
      paymentDetails: {
        source: "payment-link",
        sourceReference: "pl_d9fQur83kFdhH8hIhaZfq",
      },
      emailDetails: {
        subject: "Your invoice is available",
        body: "Please find your invoice enclosed.",
      },
      customerId: "cst_8wmqcHMN4U",
      mandateId: "mdt_pWUnw6pkBN",
      recipientIdentifier: "customer-xyz-0123",
      recipient: {
        type: "consumer",
        title: "Mrs.",
        givenName: "Jane",
        familyName: "Doe",
        organizationName: "Organization Corp.",
        organizationNumber: "12345678",
        vatNumber: "NL123456789B01",
        email: "example@email.com",
        phone: "+0123456789",
        streetAndNumber: "Keizersgracht 126",
        streetAdditional: "4th floor",
        postalCode: "5678AB",
        city: "Amsterdam",
        region: "Noord-Holland",
        country: "NL",
        locale: "nl_NL",
      },
      lines: [],
      discount: {
        type: "amount",
        value: "10.00",
      },
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
import { salesInvoicesCreate } from "mollie-api-typescript/funcs/salesInvoicesCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await salesInvoicesCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    salesInvoiceRequest: {
      testmode: false,
      profileId: "pfl_QkEhN94Ba",
      status: "draft",
      vatScheme: "standard",
      vatMode: "exclusive",
      memo: "This is a memo!",
      paymentTerm: "30 days",
      paymentDetails: {
        source: "payment-link",
        sourceReference: "pl_d9fQur83kFdhH8hIhaZfq",
      },
      emailDetails: {
        subject: "Your invoice is available",
        body: "Please find your invoice enclosed.",
      },
      customerId: "cst_8wmqcHMN4U",
      mandateId: "mdt_pWUnw6pkBN",
      recipientIdentifier: "customer-xyz-0123",
      recipient: {
        type: "consumer",
        title: "Mrs.",
        givenName: "Jane",
        familyName: "Doe",
        organizationName: "Organization Corp.",
        organizationNumber: "12345678",
        vatNumber: "NL123456789B01",
        email: "example@email.com",
        phone: "+0123456789",
        streetAndNumber: "Keizersgracht 126",
        streetAdditional: "4th floor",
        postalCode: "5678AB",
        city: "Amsterdam",
        region: "Noord-Holland",
        country: "NL",
        locale: "nl_NL",
      },
      lines: [],
      discount: {
        type: "amount",
        value: "10.00",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salesInvoicesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSalesInvoiceRequest](../../models/operations/createsalesinvoicerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SalesInvoiceResponse](../../models/salesinvoiceresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 422                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## list

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Retrieve a list of all sales invoices created through the API.

The results are paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-sales-invoices" method="get" path="/sales-invoices" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.salesInvoices.list({
    from: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
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
import { salesInvoicesList } from "mollie-api-typescript/funcs/salesInvoicesList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await salesInvoicesList(client, {
    from: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salesInvoicesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSalesInvoicesRequest](../../models/operations/listsalesinvoicesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSalesInvoicesResponse](../../models/operations/listsalesinvoicesresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Retrieve a single sales invoice by its ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-sales-invoice" method="get" path="/sales-invoices/{salesInvoiceId}" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.salesInvoices.get({
    salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
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
import { salesInvoicesGet } from "mollie-api-typescript/funcs/salesInvoicesGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await salesInvoicesGet(client, {
    salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salesInvoicesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSalesInvoiceRequest](../../models/operations/getsalesinvoicerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SalesInvoiceResponse](../../models/salesinvoiceresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## update

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Certain details of an existing sales invoice can be updated. For `draft` it is all values listed below, but for
statuses `paid` and `issued` there are certain additional requirements (`paymentDetails` and `emailDetails`,
respectively).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update-sales-invoice" method="patch" path="/sales-invoices/{salesInvoiceId}" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.salesInvoices.update({
    salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      testmode: false,
      status: "draft",
      memo: "An updated memo!",
      paymentTerm: "30 days",
      paymentDetails: {
        source: "payment-link",
        sourceReference: "pl_d9fQur83kFdhH8hIhaZfq",
      },
      emailDetails: {
        subject: "Your invoice is available",
        body: "Please find your invoice enclosed.",
      },
      recipientIdentifier: "customer-xyz-0123",
      recipient: {
        type: "consumer",
        title: "Mrs.",
        givenName: "Jane",
        familyName: "Doe",
        organizationName: "Organization Corp.",
        organizationNumber: "12345678",
        vatNumber: "NL123456789B01",
        email: "example@email.com",
        phone: "+0123456789",
        streetAndNumber: "Keizersgracht 126",
        streetAdditional: "4th floor",
        postalCode: "5678AB",
        city: "Amsterdam",
        region: "Noord-Holland",
        country: "NL",
        locale: "nl_NL",
      },
      lines: [
        {
          description: "LEGO 4440 Forest Police Station",
          quantity: 1,
          vatRate: "21.00",
          unitPrice: {
            currency: "EUR",
            value: "10.00",
          },
          discount: {
            type: "amount",
            value: "10.00",
          },
        },
      ],
      discount: {
        type: "amount",
        value: "10.00",
      },
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
import { salesInvoicesUpdate } from "mollie-api-typescript/funcs/salesInvoicesUpdate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await salesInvoicesUpdate(client, {
    salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      testmode: false,
      status: "draft",
      memo: "An updated memo!",
      paymentTerm: "30 days",
      paymentDetails: {
        source: "payment-link",
        sourceReference: "pl_d9fQur83kFdhH8hIhaZfq",
      },
      emailDetails: {
        subject: "Your invoice is available",
        body: "Please find your invoice enclosed.",
      },
      recipientIdentifier: "customer-xyz-0123",
      recipient: {
        type: "consumer",
        title: "Mrs.",
        givenName: "Jane",
        familyName: "Doe",
        organizationName: "Organization Corp.",
        organizationNumber: "12345678",
        vatNumber: "NL123456789B01",
        email: "example@email.com",
        phone: "+0123456789",
        streetAndNumber: "Keizersgracht 126",
        streetAdditional: "4th floor",
        postalCode: "5678AB",
        city: "Amsterdam",
        region: "Noord-Holland",
        country: "NL",
        locale: "nl_NL",
      },
      lines: [
        {
          description: "LEGO 4440 Forest Police Station",
          quantity: 1,
          vatRate: "21.00",
          unitPrice: {
            currency: "EUR",
            value: "10.00",
          },
          discount: {
            type: "amount",
            value: "10.00",
          },
        },
      ],
      discount: {
        type: "amount",
        value: "10.00",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("salesInvoicesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSalesInvoiceRequest](../../models/operations/updatesalesinvoicerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SalesInvoiceResponse](../../models/salesinvoiceresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 422                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## delete

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Sales invoices which are in status `draft` can be deleted. For all other statuses, please use the
[Update sales invoice](update-sales-invoice) endpoint instead.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-sales-invoice" method="delete" path="/sales-invoices/{salesInvoiceId}" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  await client.salesInvoices.delete({
    salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    deleteValuesSalesInvoice: {
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
import { salesInvoicesDelete } from "mollie-api-typescript/funcs/salesInvoicesDelete.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await salesInvoicesDelete(client, {
    salesInvoiceId: "invoice_4Y0eZitmBnQ6IDoMqZQKh",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    deleteValuesSalesInvoice: {
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("salesInvoicesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSalesInvoiceRequest](../../models/operations/deletesalesinvoicerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 422                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
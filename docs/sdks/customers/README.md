# Customers
(*customers*)

## Overview

### Available Operations

* [create](#create) - Create customer
* [list](#list) - List customers
* [get](#get) - Get customer
* [update](#update) - Update customer
* [delete](#delete) - Delete customer
* [createPayment](#createpayment) - Create customer payment
* [listPayments](#listpayments) - List customer payments

## create

Creates a simple minimal representation of a customer. Payments, recurring mandates, and subscriptions can be linked
to this customer object, which simplifies management of recurring payments.

Once registered, customers will also appear in your Mollie dashboard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-customer" method="post" path="/customers" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.create({
    name: "John Doe",
    email: "example@email.com",
    locale: "en_US",
    testmode: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { customersCreate } from "mollie-api-typescript/funcs/customersCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await customersCreate(client, {
    name: "John Doe",
    email: "example@email.com",
    locale: "en_US",
    testmode: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCustomerRequest](../../models/operations/createcustomerrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerResponse](../../models/operations/createcustomerresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.CreateCustomerHalJSONError | 404                               | application/hal+json              |
| errors.ClientDefaultError         | 4XX, 5XX                          | \*/\*                             |

## list

Retrieve a list of all customers.

The results are paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-customers" method="get" path="/customers" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.list({
    from: "cst_5B8cwPMGnU",
    testmode: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { customersList } from "mollie-api-typescript/funcs/customersList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await customersList(client, {
    from: "cst_5B8cwPMGnU",
    testmode: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCustomersRequest](../../models/operations/listcustomersrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListCustomersResponse](../../models/operations/listcustomersresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.ListCustomersBadRequestHalJSONError | 400                                        | application/hal+json                       |
| errors.ListCustomersNotFoundHalJSONError   | 404                                        | application/hal+json                       |
| errors.ClientDefaultError                  | 4XX, 5XX                                   | \*/\*                                      |

## get

Retrieve a single customer by its ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-customer" method="get" path="/customers/{customerId}" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.get({
    customerId: "cst_5B8cwPMGnU",
    include: "events",
    testmode: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { customersGet } from "mollie-api-typescript/funcs/customersGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await customersGet(client, {
    customerId: "cst_5B8cwPMGnU",
    include: "events",
    testmode: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustomerRequest](../../models/operations/getcustomerrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCustomerResponse](../../models/operations/getcustomerresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GetCustomerHalJSONError | 404                            | application/hal+json           |
| errors.ClientDefaultError      | 4XX, 5XX                       | \*/\*                          |

## update

Update an existing customer.

For an in-depth explanation of each parameter, refer to the [Create customer](create-customer) endpoint.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update-customer" method="patch" path="/customers/{customerId}" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.update({
    customerId: "cst_5B8cwPMGnU",
    requestBody: {
      name: "John Doe",
      email: "example@email.com",
      locale: "en_US",
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
import { customersUpdate } from "mollie-api-typescript/funcs/customersUpdate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await customersUpdate(client, {
    customerId: "cst_5B8cwPMGnU",
    requestBody: {
      name: "John Doe",
      email: "example@email.com",
      locale: "en_US",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCustomerRequest](../../models/operations/updatecustomerrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateCustomerResponse](../../models/operations/updatecustomerresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.UpdateCustomerHalJSONError | 404                               | application/hal+json              |
| errors.ClientDefaultError         | 4XX, 5XX                          | \*/\*                             |

## delete

Delete a customer. All mandates and subscriptions created for this customer will be canceled as well.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-customer" method="delete" path="/customers/{customerId}" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.delete({
    customerId: "cst_5B8cwPMGnU",
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
import { customersDelete } from "mollie-api-typescript/funcs/customersDelete.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await customersDelete(client, {
    customerId: "cst_5B8cwPMGnU",
    requestBody: {
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCustomerRequest](../../models/operations/deletecustomerrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.DeleteCustomerHalJSONError | 404                               | application/hal+json              |
| errors.ClientDefaultError         | 4XX, 5XX                          | \*/\*                             |

## createPayment

Creates a payment for the customer.

Linking customers to payments enables you to:

* Keep track of payment preferences for your customers
* Allow your customers to charge a previously used credit card with a single click in our hosted checkout
* Improve payment insights in the Mollie dashboard
* Use recurring payments

This endpoint is effectively an alias of the [Create payment endpoint](create-payment) with the `customerId`
parameter predefined.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    requestBody: {
      description: "Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://example.org/redirect",
      cancelUrl: "https://example.org/cancel",
      webhookUrl: "https://example.org/webhooks",
      lines: [
        {
          description: "LEGO 4440 Forest Police Station",
          quantity: 1,
          quantityUnit: "pcs",
          unitPrice: {
            currency: "EUR",
            value: "10.00",
          },
          discountAmount: {
            currency: "EUR",
            value: "10.00",
          },
          totalAmount: {
            currency: "EUR",
            value: "10.00",
          },
          vatRate: "21.00",
          vatAmount: {
            currency: "EUR",
            value: "10.00",
          },
          sku: "9780241661628",
          categories: [
            "meal",
            "eco",
          ],
          imageUrl: "https://...",
          productUrl: "https://...",
          recurring: {
            description: "Gym subscription",
            interval: "... months",
            amount: {
              currency: "EUR",
              value: "10.00",
            },
            times: 1,
            startDate: "2024-12-12",
          },
        },
      ],
      billingAddress: {
        title: "Mr.",
        givenName: "Piet",
        familyName: "Mondriaan",
        organizationName: "Mollie B.V.",
        streetAndNumber: "Keizersgracht 126",
        streetAdditional: "Apt. 1",
        postalCode: "1234AB",
        email: "piet@example.org",
        phone: "31208202070",
        city: "Amsterdam",
        region: "Noord-Holland",
        country: "NL",
      },
      shippingAddress: {
        title: "Mr.",
        givenName: "Piet",
        familyName: "Mondriaan",
        organizationName: "Mollie B.V.",
        streetAndNumber: "Keizersgracht 126",
        streetAdditional: "Apt. 1",
        postalCode: "1234AB",
        email: "piet@example.org",
        phone: "31208202070",
        city: "Amsterdam",
        region: "Noord-Holland",
        country: "NL",
      },
      locale: "en_US",
      method: "ideal",
      issuer: "ideal_INGBNL2A",
      restrictPaymentMethodsToCountry: "NL",
      captureMode: "manual",
      captureDelay: "... days",
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "10",
      },
      routing: [
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          destination: {
            type: "organization",
            organizationId: "org_1234567",
          },
          releaseDate: "2024-12-12",
          links: {
            self: {
              href: "https://...",
              type: "application/hal+json",
            },
            payment: {
              href: "https://...",
              type: "application/hal+json",
            },
          },
        },
      ],
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
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
import { customersCreatePayment } from "mollie-api-typescript/funcs/customersCreatePayment.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await customersCreatePayment(client, {
    customerId: "cst_5B8cwPMGnU",
    requestBody: {
      description: "Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://example.org/redirect",
      cancelUrl: "https://example.org/cancel",
      webhookUrl: "https://example.org/webhooks",
      lines: [
        {
          description: "LEGO 4440 Forest Police Station",
          quantity: 1,
          quantityUnit: "pcs",
          unitPrice: {
            currency: "EUR",
            value: "10.00",
          },
          discountAmount: {
            currency: "EUR",
            value: "10.00",
          },
          totalAmount: {
            currency: "EUR",
            value: "10.00",
          },
          vatRate: "21.00",
          vatAmount: {
            currency: "EUR",
            value: "10.00",
          },
          sku: "9780241661628",
          categories: [
            "meal",
            "eco",
          ],
          imageUrl: "https://...",
          productUrl: "https://...",
          recurring: {
            description: "Gym subscription",
            interval: "... months",
            amount: {
              currency: "EUR",
              value: "10.00",
            },
            times: 1,
            startDate: "2024-12-12",
          },
        },
      ],
      billingAddress: {
        title: "Mr.",
        givenName: "Piet",
        familyName: "Mondriaan",
        organizationName: "Mollie B.V.",
        streetAndNumber: "Keizersgracht 126",
        streetAdditional: "Apt. 1",
        postalCode: "1234AB",
        email: "piet@example.org",
        phone: "31208202070",
        city: "Amsterdam",
        region: "Noord-Holland",
        country: "NL",
      },
      shippingAddress: {
        title: "Mr.",
        givenName: "Piet",
        familyName: "Mondriaan",
        organizationName: "Mollie B.V.",
        streetAndNumber: "Keizersgracht 126",
        streetAdditional: "Apt. 1",
        postalCode: "1234AB",
        email: "piet@example.org",
        phone: "31208202070",
        city: "Amsterdam",
        region: "Noord-Holland",
        country: "NL",
      },
      locale: "en_US",
      method: "ideal",
      issuer: "ideal_INGBNL2A",
      restrictPaymentMethodsToCountry: "NL",
      captureMode: "manual",
      captureDelay: "... days",
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "10",
      },
      routing: [
        {
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          destination: {
            type: "organization",
            organizationId: "org_1234567",
          },
          releaseDate: "2024-12-12",
          links: {
            self: {
              href: "https://...",
              type: "application/hal+json",
            },
            payment: {
              href: "https://...",
              type: "application/hal+json",
            },
          },
        },
      ],
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreatePayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCustomerPaymentRequest](../../models/operations/createcustomerpaymentrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateCustomerPaymentResponse](../../models/operations/createcustomerpaymentresponse.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.CreateCustomerPaymentUnprocessableEntityHalJSONError | 422                                                         | application/hal+json                                        |
| errors.CreateCustomerPaymentServiceUnavailableHalJSONError  | 503                                                         | application/hal+json                                        |
| errors.ClientDefaultError                                   | 4XX, 5XX                                                    | \*/\*                                                       |

## listPayments

Retrieve all payments linked to the customer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-customer-payments" method="get" path="/customers/{customerId}/payments" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.listPayments({
    customerId: "cst_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    profileId: "pfl_5B8cwPMGnU",
    testmode: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { customersListPayments } from "mollie-api-typescript/funcs/customersListPayments.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await customersListPayments(client, {
    customerId: "cst_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    profileId: "pfl_5B8cwPMGnU",
    testmode: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersListPayments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCustomerPaymentsRequest](../../models/operations/listcustomerpaymentsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListCustomerPaymentsResponse](../../models/operations/listcustomerpaymentsresponse.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.ListCustomerPaymentsHalJSONError | 400                                     | application/hal+json                    |
| errors.ClientDefaultError               | 4XX, 5XX                                | \*/\*                                   |
# Customers

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

<!-- UsageSnippet language="typescript" operationID="create-customer" method="post" path="/customers" example="create-customer-201-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    entityCustomer: {
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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    entityCustomer: {
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

**Promise\<[models.CustomerResponse](../../models/customerresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## list

Retrieve a list of all customers.

The results are paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list-customers" method="get" path="/customers" example="list-customers" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.list({
    from: "cst_5B8cwPMGnU",
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
import { customersList } from "mollie-api-typescript/funcs/customersList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await customersList(client, {
    from: "cst_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 404                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieve a single customer by its ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-customer" method="get" path="/customers/{customerId}" example="get-customer-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.get({
    customerId: "cst_5B8cwPMGnU",
    include: "events",
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
import { customersGet } from "mollie-api-typescript/funcs/customersGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await customersGet(client, {
    customerId: "cst_5B8cwPMGnU",
    include: "events",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## update

Update an existing customer.

For an in-depth explanation of each parameter, refer to the [Create customer](create-customer) endpoint.

### Example Usage: update-customer-200-1

<!-- UsageSnippet language="typescript" operationID="update-customer" method="patch" path="/customers/{customerId}" example="update-customer-200-1" -->
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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
### Example Usage: update-customer-200-2

<!-- UsageSnippet language="typescript" operationID="update-customer" method="patch" path="/customers/{customerId}" example="update-customer-200-2" -->
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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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

**Promise\<[models.CustomerResponse](../../models/customerresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

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
  await client.customers.delete({
    customerId: "cst_5B8cwPMGnU",
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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
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

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## createPayment

Creates a payment for the customer.

Linking customers to payments enables you to:

* Keep track of payment preferences for your customers
* Allow your customers to charge a previously used credit card with a single click in our hosted checkout
* Improve payment insights in the Mollie dashboard
* Use recurring payments

This endpoint is effectively an alias of the [Create payment endpoint](create-payment) with the `customerId`
parameter predefined.

### Example Usage: create-payment-201-1

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-1" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
### Example Usage: create-payment-201-10

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-10" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
### Example Usage: create-payment-201-11

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-11" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
### Example Usage: create-payment-201-12

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-12" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
### Example Usage: create-payment-201-2

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-2" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
### Example Usage: create-payment-201-3

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-3" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
### Example Usage: create-payment-201-4

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-4" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
### Example Usage: create-payment-201-5

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-5" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
### Example Usage: create-payment-201-6

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-6" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
### Example Usage: create-payment-201-7

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-7" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
### Example Usage: create-payment-201-8

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-8" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
### Example Usage: create-payment-201-9

<!-- UsageSnippet language="typescript" operationID="create-customer-payment" method="post" path="/customers/{customerId}/payments" example="create-payment-201-9" -->
```typescript
import { Client } from "mollie-api-typescript";
import { RFCDate } from "mollie-api-typescript/types";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.customers.createPayment({
    customerId: "cst_5B8cwPMGnU",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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
import { RFCDate } from "mollie-api-typescript/types";

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
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    paymentRequest: {
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
          type: "physical",
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
      captureDelay: "8 hours",
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
      sequenceType: "oneoff",
      mandateId: "mdt_5B8cwPMGnU",
      customerId: "cst_5B8cwPMGnU",
      profileId: "pfl_5B8cwPMGnU",
      dueDate: "2025-01-01",
      testmode: false,
      applePayPaymentToken: "{\"paymentData\": {\"version\": \"EC_v1\", \"data\": \"vK3BbrCbI/....\"}}",
      company: {
        registrationNumber: "12345678",
        vatNumber: "NL123456789B01",
      },
      cardToken: "tkn_12345",
      voucherNumber: "1234567890",
      voucherPin: "1234",
      consumerDateOfBirth: new RFCDate("2000-01-01"),
      digitalGoods: true,
      customerReference: "1234567890",
      terminalId: "term_1234567890",
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

**Promise\<[models.PaymentResponse](../../models/paymentresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 422                       | application/hal+json      |
| errors.ErrorResponse      | 503                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## listPayments

Retrieve all payments linked to the customer.

### Example Usage: list-payments-200-1

<!-- UsageSnippet language="typescript" operationID="list-customer-payments" method="get" path="/customers/{customerId}/payments" example="list-payments-200-1" -->
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
  const result = await client.customers.listPayments({
    customerId: "cst_5B8cwPMGnU",
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
import { customersListPayments } from "mollie-api-typescript/funcs/customersListPayments.js";

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
  const res = await customersListPayments(client, {
    customerId: "cst_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
### Example Usage: list-payments-200-2

<!-- UsageSnippet language="typescript" operationID="list-customer-payments" method="get" path="/customers/{customerId}/payments" example="list-payments-200-2" -->
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
  const result = await client.customers.listPayments({
    customerId: "cst_5B8cwPMGnU",
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
import { customersListPayments } from "mollie-api-typescript/funcs/customersListPayments.js";

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
  const res = await customersListPayments(client, {
    customerId: "cst_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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
### Example Usage: list-payments-200-3

<!-- UsageSnippet language="typescript" operationID="list-customer-payments" method="get" path="/customers/{customerId}/payments" example="list-payments-200-3" -->
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
  const result = await client.customers.listPayments({
    customerId: "cst_5B8cwPMGnU",
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
import { customersListPayments } from "mollie-api-typescript/funcs/customersListPayments.js";

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
  const res = await customersListPayments(client, {
    customerId: "cst_5B8cwPMGnU",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
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

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
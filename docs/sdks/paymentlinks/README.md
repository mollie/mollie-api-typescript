# PaymentLinks

## Overview

### Available Operations

* [create](#create) - Create payment link
* [list](#list) - List payment links
* [get](#get) - Get payment link
* [update](#update) - Update payment link
* [delete](#delete) - Delete payment link
* [listPayments](#listpayments) - Get payment link payments

## create

With the Payment links API you can generate payment links that by default, unlike regular payments, do not expire.
The payment link can be shared with your customers and will redirect them to them the payment page where they can
complete the payment. A [payment](get-payment) will only be created once the customer initiates the payment.

### Example Usage: create-payment-link-201-1

<!-- UsageSnippet language="typescript" operationID="create-payment-link" method="post" path="/payment-links" example="create-payment-link-201-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.paymentLinks.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      description: "Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      minimumAmount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://webshop.example.org/payment-links/redirect/",
      webhookUrl: "https://webshop.example.org/payment-links/webhook/",
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
      profileId: "pfl_QkEhN94Ba",
      reusable: false,
      expiresAt: "2025-12-24T11:00:16+00:00",
      allowedMethods: null,
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "Platform fee",
      },
      sequenceType: "oneoff",
      customerId: "cst_XimFHuaEzd",
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
import { paymentLinksCreate } from "mollie-api-typescript/funcs/paymentLinksCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await paymentLinksCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      description: "Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      minimumAmount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://webshop.example.org/payment-links/redirect/",
      webhookUrl: "https://webshop.example.org/payment-links/webhook/",
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
      profileId: "pfl_QkEhN94Ba",
      reusable: false,
      expiresAt: "2025-12-24T11:00:16+00:00",
      allowedMethods: null,
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "Platform fee",
      },
      sequenceType: "oneoff",
      customerId: "cst_XimFHuaEzd",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentLinksCreate failed:", res.error);
  }
}

run();
```
### Example Usage: create-payment-link-201-2

<!-- UsageSnippet language="typescript" operationID="create-payment-link" method="post" path="/payment-links" example="create-payment-link-201-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.paymentLinks.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      description: "Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      minimumAmount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://webshop.example.org/payment-links/redirect/",
      webhookUrl: "https://webshop.example.org/payment-links/webhook/",
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
      profileId: "pfl_QkEhN94Ba",
      reusable: false,
      expiresAt: "2025-12-24T11:00:16+00:00",
      allowedMethods: null,
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "Platform fee",
      },
      sequenceType: "oneoff",
      customerId: "cst_XimFHuaEzd",
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
import { paymentLinksCreate } from "mollie-api-typescript/funcs/paymentLinksCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await paymentLinksCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      description: "Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      minimumAmount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://webshop.example.org/payment-links/redirect/",
      webhookUrl: "https://webshop.example.org/payment-links/webhook/",
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
      profileId: "pfl_QkEhN94Ba",
      reusable: false,
      expiresAt: "2025-12-24T11:00:16+00:00",
      allowedMethods: null,
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "Platform fee",
      },
      sequenceType: "oneoff",
      customerId: "cst_XimFHuaEzd",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentLinksCreate failed:", res.error);
  }
}

run();
```
### Example Usage: create-payment-link-201-3

<!-- UsageSnippet language="typescript" operationID="create-payment-link" method="post" path="/payment-links" example="create-payment-link-201-3" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.paymentLinks.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      description: "Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      minimumAmount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://webshop.example.org/payment-links/redirect/",
      webhookUrl: "https://webshop.example.org/payment-links/webhook/",
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
      profileId: "pfl_QkEhN94Ba",
      reusable: false,
      expiresAt: "2025-12-24T11:00:16+00:00",
      allowedMethods: null,
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "Platform fee",
      },
      sequenceType: "oneoff",
      customerId: "cst_XimFHuaEzd",
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
import { paymentLinksCreate } from "mollie-api-typescript/funcs/paymentLinksCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await paymentLinksCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      description: "Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      minimumAmount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://webshop.example.org/payment-links/redirect/",
      webhookUrl: "https://webshop.example.org/payment-links/webhook/",
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
      profileId: "pfl_QkEhN94Ba",
      reusable: false,
      expiresAt: "2025-12-24T11:00:16+00:00",
      allowedMethods: null,
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "Platform fee",
      },
      sequenceType: "oneoff",
      customerId: "cst_XimFHuaEzd",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentLinksCreate failed:", res.error);
  }
}

run();
```
### Example Usage: create-payment-link-201-4

<!-- UsageSnippet language="typescript" operationID="create-payment-link" method="post" path="/payment-links" example="create-payment-link-201-4" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.paymentLinks.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      description: "Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      minimumAmount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://webshop.example.org/payment-links/redirect/",
      webhookUrl: "https://webshop.example.org/payment-links/webhook/",
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
      profileId: "pfl_QkEhN94Ba",
      reusable: false,
      expiresAt: "2025-12-24T11:00:16+00:00",
      allowedMethods: null,
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "Platform fee",
      },
      sequenceType: "oneoff",
      customerId: "cst_XimFHuaEzd",
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
import { paymentLinksCreate } from "mollie-api-typescript/funcs/paymentLinksCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await paymentLinksCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      description: "Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      minimumAmount: {
        currency: "EUR",
        value: "10.00",
      },
      redirectUrl: "https://webshop.example.org/payment-links/redirect/",
      webhookUrl: "https://webshop.example.org/payment-links/webhook/",
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
      profileId: "pfl_QkEhN94Ba",
      reusable: false,
      expiresAt: "2025-12-24T11:00:16+00:00",
      allowedMethods: null,
      applicationFee: {
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        description: "Platform fee",
      },
      sequenceType: "oneoff",
      customerId: "cst_XimFHuaEzd",
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentLinksCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePaymentLinkRequest](../../models/operations/createpaymentlinkrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PaymentLinkResponse](../../models/paymentlinkresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 422                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## list

Retrieve a list of all payment links.

The results are paginated.

### Example Usage: list-payment-links-200-1

<!-- UsageSnippet language="typescript" operationID="list-payment-links" method="get" path="/payment-links" example="list-payment-links-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.paymentLinks.list({
    from: "pl_d9fQur83kFdhH8hIhaZfq",
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
import { paymentLinksList } from "mollie-api-typescript/funcs/paymentLinksList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await paymentLinksList(client, {
    from: "pl_d9fQur83kFdhH8hIhaZfq",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentLinksList failed:", res.error);
  }
}

run();
```
### Example Usage: list-payment-links-200-2

<!-- UsageSnippet language="typescript" operationID="list-payment-links" method="get" path="/payment-links" example="list-payment-links-200-2" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.paymentLinks.list({
    from: "pl_d9fQur83kFdhH8hIhaZfq",
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
import { paymentLinksList } from "mollie-api-typescript/funcs/paymentLinksList.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await paymentLinksList(client, {
    from: "pl_d9fQur83kFdhH8hIhaZfq",
    limit: 50,
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentLinksList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPaymentLinksRequest](../../models/operations/listpaymentlinksrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPaymentLinksResponse](../../models/operations/listpaymentlinksresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## get

Retrieve a single payment link by its ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-payment-link" method="get" path="/payment-links/{paymentLinkId}" example="get-payment-link-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.paymentLinks.get({
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
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
import { paymentLinksGet } from "mollie-api-typescript/funcs/paymentLinksGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await paymentLinksGet(client, {
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentLinksGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPaymentLinkRequest](../../models/operations/getpaymentlinkrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PaymentLinkResponse](../../models/paymentlinkresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## update

Certain details of an existing payment link can be updated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update-payment-link" method="patch" path="/payment-links/{paymentLinkId}" example="update-payment-link-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.paymentLinks.update({
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      description: "Chess Board",
      minimumAmount: {
        currency: "EUR",
        value: "10.00",
      },
      archived: false,
      allowedMethods: [
        "ideal",
      ],
      lines: null,
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
import { paymentLinksUpdate } from "mollie-api-typescript/funcs/paymentLinksUpdate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await paymentLinksUpdate(client, {
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      description: "Chess Board",
      minimumAmount: {
        currency: "EUR",
        value: "10.00",
      },
      archived: false,
      allowedMethods: [
        "ideal",
      ],
      lines: null,
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
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentLinksUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePaymentLinkRequest](../../models/operations/updatepaymentlinkrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PaymentLinkResponse](../../models/paymentlinkresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 404, 422                  | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## delete

Payment links which have not been opened and no payments have been made yet can be deleted entirely.
This can be useful for removing payment links that have been incorrectly configured or that are no longer relevant.

Once deleted, the payment link will no longer show up in the API or Mollie dashboard.

To simply disable a payment link without fully deleting it, you can use the `archived` parameter on the
[Update payment link](update-payment-link) endpoint instead.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete-payment-link" method="delete" path="/payment-links/{paymentLinkId}" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  await client.paymentLinks.delete({
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
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
import { paymentLinksDelete } from "mollie-api-typescript/funcs/paymentLinksDelete.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await paymentLinksDelete(client, {
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("paymentLinksDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePaymentLinkRequest](../../models/operations/deletepaymentlinkrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## listPayments

Retrieve the list of payments for a specific payment link.

The results are paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-payment-link-payments" method="get" path="/payment-links/{paymentLinkId}/payments" example="get-payment-link-payments-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.paymentLinks.listPayments({
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
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
import { paymentLinksListPayments } from "mollie-api-typescript/funcs/paymentLinksListPayments.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  testmode: false,
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await paymentLinksListPayments(client, {
    paymentLinkId: "pl_d9fQur83kFdhH8hIhaZfq",
    from: "tr_5B8cwPMGnU",
    limit: 50,
    sort: "desc",
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("paymentLinksListPayments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPaymentLinkPaymentsRequest](../../models/operations/getpaymentlinkpaymentsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPaymentLinkPaymentsResponse](../../models/operations/getpaymentlinkpaymentsresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
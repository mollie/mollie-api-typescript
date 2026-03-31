# VerifyPayees

## Overview

### Available Operations

* [create](#create) - Verify Payee

## create

> 🚧 Beta feature
>
> This feature is currently in beta testing, and the final specification may still change.

Perform a Verification of Payee (VoP) check. This allows you to verify the account holder name against the
records held by the receiving bank before initiating a transfer.

The verification result indicates whether the provided name matches, closely matches, or does not match the
name on file at the receiving bank. This helps prevent misdirected payments.

### Simulating verification scenarios in test mode

In test mode, you can simulate various verification outcomes by adjusting the creditor name in the
`creditorBankAccount.accountHolderName` property. This allows you to test all possible Verification of Payee
results without needing special properties. The names are case insensitive.

| Account holder name                    | Scenario                                      | Verification result | Suggested name |
|----------------------------------------|-----------------------------------------------|---------------------|----------------|
| `John Close Match`                     | Name closely matches the bank records          | `close-match`       | `John Match`   |
| `John No Match`                        | Name does not match the bank records           | `no-match`          | —              |
| `John Unavailable`                     | Verification is not available                  | `not-available`     | —              |
| Any other name                         | Default: name matches the bank records         | `match`             | —              |

### Example Usage: verify-payee-200-close-match

<!-- UsageSnippet language="typescript" operationID="verify-payee" method="post" path="/business-accounts/payee-verifications" example="verify-payee-200-close-match" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.verifyPayees.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    verificationOfPayeeRequest: {
      creditorBankAccount: {
        accountHolderName: "Jan Jansen",
        format: "iban",
        accountNumber: "NL02ABNA0123456789",
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
import { verifyPayeesCreate } from "mollie-api-typescript/funcs/verifyPayeesCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await verifyPayeesCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    verificationOfPayeeRequest: {
      creditorBankAccount: {
        accountHolderName: "Jan Jansen",
        format: "iban",
        accountNumber: "NL02ABNA0123456789",
      },
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verifyPayeesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: verify-payee-200-match

<!-- UsageSnippet language="typescript" operationID="verify-payee" method="post" path="/business-accounts/payee-verifications" example="verify-payee-200-match" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.verifyPayees.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    verificationOfPayeeRequest: {
      creditorBankAccount: {
        accountHolderName: "Jan Jansen",
        format: "iban",
        accountNumber: "NL02ABNA0123456789",
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
import { verifyPayeesCreate } from "mollie-api-typescript/funcs/verifyPayeesCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await verifyPayeesCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    verificationOfPayeeRequest: {
      creditorBankAccount: {
        accountHolderName: "Jan Jansen",
        format: "iban",
        accountNumber: "NL02ABNA0123456789",
      },
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verifyPayeesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: verify-payee-200-no-match

<!-- UsageSnippet language="typescript" operationID="verify-payee" method="post" path="/business-accounts/payee-verifications" example="verify-payee-200-no-match" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.verifyPayees.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    verificationOfPayeeRequest: {
      creditorBankAccount: {
        accountHolderName: "Jan Jansen",
        format: "iban",
        accountNumber: "NL02ABNA0123456789",
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
import { verifyPayeesCreate } from "mollie-api-typescript/funcs/verifyPayeesCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await verifyPayeesCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    verificationOfPayeeRequest: {
      creditorBankAccount: {
        accountHolderName: "Jan Jansen",
        format: "iban",
        accountNumber: "NL02ABNA0123456789",
      },
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verifyPayeesCreate failed:", res.error);
  }
}

run();
```
### Example Usage: verify-payee-200-not-available

<!-- UsageSnippet language="typescript" operationID="verify-payee" method="post" path="/business-accounts/payee-verifications" example="verify-payee-200-not-available" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const result = await client.verifyPayees.create({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    verificationOfPayeeRequest: {
      creditorBankAccount: {
        accountHolderName: "Jan Jansen",
        format: "iban",
        accountNumber: "NL02ABNA0123456789",
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
import { verifyPayeesCreate } from "mollie-api-typescript/funcs/verifyPayeesCreate.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    organizationAccessToken: process.env["CLIENT_ORGANIZATION_ACCESS_TOKEN"] ?? "",
  },
});

async function run() {
  const res = await verifyPayeesCreate(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    verificationOfPayeeRequest: {
      creditorBankAccount: {
        accountHolderName: "Jan Jansen",
        format: "iban",
        accountNumber: "NL02ABNA0123456789",
      },
      testmode: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("verifyPayeesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VerifyPayeeRequest](../../models/operations/verifypayeerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.VerificationOfPayeeResponse](../../models/verificationofpayeeresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 422, 429                  | application/hal+json      |
| errors.ErrorResponse      | 503                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
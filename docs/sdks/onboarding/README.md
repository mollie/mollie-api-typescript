# Onboarding

## Overview

### Available Operations

* [get](#get) - Get onboarding status
* [submit](#submit) - Submit onboarding data

## get

Retrieve the onboarding status of the currently authenticated organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-onboarding-status" method="get" path="/onboarding/me" example="get-onboarding-status-200-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.onboarding.get({
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
import { onboardingGet } from "mollie-api-typescript/funcs/onboardingGet.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await onboardingGet(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("onboardingGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOnboardingStatusRequest](../../models/operations/getonboardingstatusrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EntityOnboardingStatus](../../models/entityonboardingstatus.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |

## submit

**⚠️ We no longer recommend implementing this endpoint. Please refer to the Client Links API instead to kick off the
onboarding process for your merchants.**

Submit data that will be prefilled in the merchant's onboarding. The data you submit will only be processed when the
onboarding status is `needs-data`.  
Information that the merchant has entered in their dashboard will not be overwritten.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="submit-onboarding-data" method="post" path="/onboarding/me" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  await client.onboarding.submit({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      organization: {
        name: "Mollie B.V.",
        address: {
          streetAndNumber: "Keizersgracht 126",
          postalCode: "1015 CW",
          city: "Amsterdam",
          country: "NL",
        },
        registrationNumber: "30204462",
        vatNumber: "NL815839091B01",
        vatRegulation: "dutch",
      },
      profile: {
        name: "Mollie",
        url: "https://www.mollie.com",
        email: "info@mollie.com",
        phone: "+31208202070",
        description: "Payment service provider",
        businessCategory: "MONEY_SERVICES",
      },
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ClientCore } from "mollie-api-typescript/core.js";
import { onboardingSubmit } from "mollie-api-typescript/funcs/onboardingSubmit.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await onboardingSubmit(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      organization: {
        name: "Mollie B.V.",
        address: {
          streetAndNumber: "Keizersgracht 126",
          postalCode: "1015 CW",
          city: "Amsterdam",
          country: "NL",
        },
        registrationNumber: "30204462",
        vatNumber: "NL815839091B01",
        vatRegulation: "dutch",
      },
      profile: {
        name: "Mollie",
        url: "https://www.mollie.com",
        email: "info@mollie.com",
        phone: "+31208202070",
        description: "Payment service provider",
        businessCategory: "MONEY_SERVICES",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("onboardingSubmit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SubmitOnboardingDataRequest](../../models/operations/submitonboardingdatarequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
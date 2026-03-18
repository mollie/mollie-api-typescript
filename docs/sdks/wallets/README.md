# Wallets

## Overview

### Available Operations

* [requestApplePaySession](#requestapplepaysession) - Request Apple Pay payment session

## requestApplePaySession

When integrating Apple Pay in your own checkout on the web, you need to
[provide merchant validation](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/providing_merchant_validation).
This is normally done using Apple's
[Requesting an Apple Pay Session](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/requesting_an_apple_pay_payment_session).
The merchant validation proves to Apple that a validated merchant is calling the Apple Pay Javascript APIs.

To integrate Apple Pay via Mollie, you will have to call the Mollie API instead of Apple's API. The response of this
API call can then be passed as-is to the completion method, `completeMerchantValidation`.

Before requesting an Apple Pay Payment Session, you must place the domain validation file on your server at:
`https://[domain]/.well-known/apple-developer-merchantid-domain-association`. Without this file, it will not be
possible to use Apple Pay on your domain.

Each new transaction requires a new payment session object. Merchant session objects are not reusable, and they
expire after five minutes.

Payment sessions cannot be requested directly from the browser. The request must be sent from your server. For the
full documentation, see the official
[Apple Pay JS API](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api) documentation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="request-apple-pay-payment-session" method="post" path="/wallets/applepay/sessions" example="request-apple-pay-payment-session-201-1" -->
```typescript
import { Client } from "mollie-api-typescript";

const client = new Client({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await client.wallets.requestApplePaySession({
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      validationUrl: "https://apple-pay-gateway-cert.apple.com/paymentservices/paymentSession",
      domain: "pay.myshop.com",
      profileId: "pfl_5B8cwPMGnU",
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
import { walletsRequestApplePaySession } from "mollie-api-typescript/funcs/walletsRequestApplePaySession.js";

// Use `ClientCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const client = new ClientCore({
  security: {
    apiKey: process.env["CLIENT_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await walletsRequestApplePaySession(client, {
    idempotencyKey: "123e4567-e89b-12d3-a456-426",
    requestBody: {
      validationUrl: "https://apple-pay-gateway-cert.apple.com/paymentservices/paymentSession",
      domain: "pay.myshop.com",
      profileId: "pfl_5B8cwPMGnU",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("walletsRequestApplePaySession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RequestApplePayPaymentSessionRequest](../../models/operations/requestapplepaypaymentsessionrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 422                       | application/hal+json      |
| errors.ClientDefaultError | 4XX, 5XX                  | \*/\*                     |
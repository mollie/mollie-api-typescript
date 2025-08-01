/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClientCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { ClientError } from "../models/errors/clienterror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Request Apple Pay payment session
 *
 * @remarks
 * When integrating Apple Pay in your own checkout on the web, you need to
 * [provide merchant validation](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/providing_merchant_validation).
 * This is normally done using Apple's
 * [Requesting an Apple Pay Session](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/requesting_an_apple_pay_payment_session).
 * The merchant validation proves to Apple that a validated merchant is calling the Apple Pay Javascript APIs.
 *
 * To integrate Apple Pay via Mollie, you will have to call the Mollie API instead of Apple's API. The response of this
 * API call can then be passed as-is to the completion method, `completeMerchantValidation`.
 *
 * Before requesting an Apple Pay Payment Session, you must place the domain validation file on your server at:
 * `https://[domain]/.well-known/apple-developer-merchantid-domain-association`. Without this file, it will not be
 * possible to use Apple Pay on your domain.
 *
 * Each new transaction requires a new payment session object. Merchant session objects are not reusable, and they
 * expire after five minutes.
 *
 * Payment sessions cannot be requested directly from the browser. The request must be sent from your server. For the
 * full documentation, see the official
 * [Apple Pay JS API](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api) documentation.
 */
export function walletsRequestApplePaySession(
  client: ClientCore,
  request?: operations.RequestApplePayPaymentSessionRequest | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    { [k: string]: any },
    | errors.RequestApplePayPaymentSessionHalJSONError
    | ClientError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: ClientCore,
  request?: operations.RequestApplePayPaymentSessionRequest | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      { [k: string]: any },
      | errors.RequestApplePayPaymentSessionHalJSONError
      | ClientError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.RequestApplePayPaymentSessionRequest$outboundSchema.optional()
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = payload === undefined
    ? null
    : encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/wallets/applepay/sessions")();

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/hal+json",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "request-apple-pay-payment-session",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["5xx"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["422", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    { [k: string]: any },
    | errors.RequestApplePayPaymentSessionHalJSONError
    | ClientError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(201, z.record(z.any()), { ctype: "application/hal+json" }),
    M.jsonErr(
      422,
      errors.RequestApplePayPaymentSessionHalJSONError$inboundSchema,
      { ctype: "application/hal+json" },
    ),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}

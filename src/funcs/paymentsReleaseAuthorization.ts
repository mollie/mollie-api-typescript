/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClientCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
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
 * Release payment authorization
 *
 * @remarks
 * Releases the full remaining authorized amount. Call this endpoint when you will not be making any additional
 * captures. Payment authorizations may also be released manually from the Mollie Dashboard.
 *
 * Mollie will do its best to process release requests, but it is not guaranteed that it will succeed. It is up to
 * the issuing bank if and when the hold will be released.
 *
 * If the request does succeed, the payment status will change to `canceled` for payments without captures.
 * If there is a successful capture, the payment will transition to `paid`.
 */
export function paymentsReleaseAuthorization(
  client: ClientCore,
  request: operations.ReleaseAuthorizationRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    any,
    | errors.ReleaseAuthorizationNotFoundHalJSONError
    | errors.ReleaseAuthorizationUnprocessableEntityHalJSONError
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
  request: operations.ReleaseAuthorizationRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      any,
      | errors.ReleaseAuthorizationNotFoundHalJSONError
      | errors.ReleaseAuthorizationUnprocessableEntityHalJSONError
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
      operations.ReleaseAuthorizationRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    paymentId: encodeSimple("paymentId", payload.paymentId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/payments/{paymentId}/release-authorization")(
    pathParams,
  );

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/hal+json",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "release-authorization",
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
    errorCodes: ["404", "422", "4XX", "5XX"],
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
    any,
    | errors.ReleaseAuthorizationNotFoundHalJSONError
    | errors.ReleaseAuthorizationUnprocessableEntityHalJSONError
    | ClientError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(202, z.any(), { ctype: "application/hal+json" }),
    M.jsonErr(
      404,
      errors.ReleaseAuthorizationNotFoundHalJSONError$inboundSchema,
      { ctype: "application/hal+json" },
    ),
    M.jsonErr(
      422,
      errors.ReleaseAuthorizationUnprocessableEntityHalJSONError$inboundSchema,
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

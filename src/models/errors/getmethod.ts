/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as operations from "../operations/index.js";
import { ClientError } from "./clienterror.js";

/**
 * An error response object.
 */
export type GetMethodNotFoundHalJSONErrorData = {
  /**
   * The status code of the error message. This is always the same code as the status code of the HTTP message itself.
   */
  status: number;
  /**
   * The HTTP reason phrase of the error. For example, for a `404` error, the `title` will be `Not Found`.
   */
  title: string;
  /**
   * A detailed human-readable description of the error that occurred.
   */
  detail: string;
  /**
   * If the error was caused by a value provided by you in a specific field, the `field` property will contain the name
   *
   * @remarks
   * of the field that caused the issue.
   */
  field?: string | undefined;
  links: operations.GetMethodNotFoundLinks;
};

/**
 * An error response object.
 */
export class GetMethodNotFoundHalJSONError extends ClientError {
  /**
   * The status code of the error message. This is always the same code as the status code of the HTTP message itself.
   */
  status: number;
  /**
   * The HTTP reason phrase of the error. For example, for a `404` error, the `title` will be `Not Found`.
   */
  title: string;
  /**
   * A detailed human-readable description of the error that occurred.
   */
  detail: string;
  /**
   * If the error was caused by a value provided by you in a specific field, the `field` property will contain the name
   *
   * @remarks
   * of the field that caused the issue.
   */
  field?: string | undefined;
  links: operations.GetMethodNotFoundLinks;

  /** The original data that was passed to this error instance. */
  data$: GetMethodNotFoundHalJSONErrorData;

  constructor(
    err: GetMethodNotFoundHalJSONErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.status = err.status;
    this.title = err.title;
    this.detail = err.detail;
    if (err.field != null) this.field = err.field;
    this.links = err.links;

    this.name = "GetMethodNotFoundHalJSONError";
  }
}

/**
 * An error response object.
 */
export type GetMethodBadRequestHalJSONErrorData = {
  /**
   * The status code of the error message. This is always the same code as the status code of the HTTP message itself.
   */
  status: number;
  /**
   * The HTTP reason phrase of the error. For example, for a `404` error, the `title` will be `Not Found`.
   */
  title: string;
  /**
   * A detailed human-readable description of the error that occurred.
   */
  detail: string;
  /**
   * If the error was caused by a value provided by you in a specific field, the `field` property will contain the name
   *
   * @remarks
   * of the field that caused the issue.
   */
  field?: string | undefined;
  links: operations.GetMethodBadRequestLinks;
};

/**
 * An error response object.
 */
export class GetMethodBadRequestHalJSONError extends ClientError {
  /**
   * The status code of the error message. This is always the same code as the status code of the HTTP message itself.
   */
  status: number;
  /**
   * The HTTP reason phrase of the error. For example, for a `404` error, the `title` will be `Not Found`.
   */
  title: string;
  /**
   * A detailed human-readable description of the error that occurred.
   */
  detail: string;
  /**
   * If the error was caused by a value provided by you in a specific field, the `field` property will contain the name
   *
   * @remarks
   * of the field that caused the issue.
   */
  field?: string | undefined;
  links: operations.GetMethodBadRequestLinks;

  /** The original data that was passed to this error instance. */
  data$: GetMethodBadRequestHalJSONErrorData;

  constructor(
    err: GetMethodBadRequestHalJSONErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.status = err.status;
    this.title = err.title;
    this.detail = err.detail;
    if (err.field != null) this.field = err.field;
    this.links = err.links;

    this.name = "GetMethodBadRequestHalJSONError";
  }
}

/** @internal */
export const GetMethodNotFoundHalJSONError$inboundSchema: z.ZodType<
  GetMethodNotFoundHalJSONError,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.number().int(),
  title: z.string(),
  detail: z.string(),
  field: z.string().optional(),
  _links: z.lazy(() => operations.GetMethodNotFoundLinks$inboundSchema),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_links": "links",
    });

    return new GetMethodNotFoundHalJSONError(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GetMethodNotFoundHalJSONError$Outbound = {
  status: number;
  title: string;
  detail: string;
  field?: string | undefined;
  _links: operations.GetMethodNotFoundLinks$Outbound;
};

/** @internal */
export const GetMethodNotFoundHalJSONError$outboundSchema: z.ZodType<
  GetMethodNotFoundHalJSONError$Outbound,
  z.ZodTypeDef,
  GetMethodNotFoundHalJSONError
> = z.instanceof(GetMethodNotFoundHalJSONError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      status: z.number().int(),
      title: z.string(),
      detail: z.string(),
      field: z.string().optional(),
      links: z.lazy(() => operations.GetMethodNotFoundLinks$outboundSchema),
    }).transform((v) => {
      return remap$(v, {
        links: "_links",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMethodNotFoundHalJSONError$ {
  /** @deprecated use `GetMethodNotFoundHalJSONError$inboundSchema` instead. */
  export const inboundSchema = GetMethodNotFoundHalJSONError$inboundSchema;
  /** @deprecated use `GetMethodNotFoundHalJSONError$outboundSchema` instead. */
  export const outboundSchema = GetMethodNotFoundHalJSONError$outboundSchema;
  /** @deprecated use `GetMethodNotFoundHalJSONError$Outbound` instead. */
  export type Outbound = GetMethodNotFoundHalJSONError$Outbound;
}

/** @internal */
export const GetMethodBadRequestHalJSONError$inboundSchema: z.ZodType<
  GetMethodBadRequestHalJSONError,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.number().int(),
  title: z.string(),
  detail: z.string(),
  field: z.string().optional(),
  _links: z.lazy(() => operations.GetMethodBadRequestLinks$inboundSchema),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_links": "links",
    });

    return new GetMethodBadRequestHalJSONError(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GetMethodBadRequestHalJSONError$Outbound = {
  status: number;
  title: string;
  detail: string;
  field?: string | undefined;
  _links: operations.GetMethodBadRequestLinks$Outbound;
};

/** @internal */
export const GetMethodBadRequestHalJSONError$outboundSchema: z.ZodType<
  GetMethodBadRequestHalJSONError$Outbound,
  z.ZodTypeDef,
  GetMethodBadRequestHalJSONError
> = z.instanceof(GetMethodBadRequestHalJSONError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      status: z.number().int(),
      title: z.string(),
      detail: z.string(),
      field: z.string().optional(),
      links: z.lazy(() => operations.GetMethodBadRequestLinks$outboundSchema),
    }).transform((v) => {
      return remap$(v, {
        links: "_links",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMethodBadRequestHalJSONError$ {
  /** @deprecated use `GetMethodBadRequestHalJSONError$inboundSchema` instead. */
  export const inboundSchema = GetMethodBadRequestHalJSONError$inboundSchema;
  /** @deprecated use `GetMethodBadRequestHalJSONError$outboundSchema` instead. */
  export const outboundSchema = GetMethodBadRequestHalJSONError$outboundSchema;
  /** @deprecated use `GetMethodBadRequestHalJSONError$Outbound` instead. */
  export type Outbound = GetMethodBadRequestHalJSONError$Outbound;
}

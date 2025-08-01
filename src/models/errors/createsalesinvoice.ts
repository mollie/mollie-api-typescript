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
export type CreateSalesInvoiceUnprocessableEntityHalJSONErrorData = {
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
  links: operations.CreateSalesInvoiceUnprocessableEntityLinks;
};

/**
 * An error response object.
 */
export class CreateSalesInvoiceUnprocessableEntityHalJSONError
  extends ClientError
{
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
  links: operations.CreateSalesInvoiceUnprocessableEntityLinks;

  /** The original data that was passed to this error instance. */
  data$: CreateSalesInvoiceUnprocessableEntityHalJSONErrorData;

  constructor(
    err: CreateSalesInvoiceUnprocessableEntityHalJSONErrorData,
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

    this.name = "CreateSalesInvoiceUnprocessableEntityHalJSONError";
  }
}

/**
 * An error response object.
 */
export type CreateSalesInvoiceNotFoundHalJSONErrorData = {
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
  links: operations.CreateSalesInvoiceNotFoundLinks;
};

/**
 * An error response object.
 */
export class CreateSalesInvoiceNotFoundHalJSONError extends ClientError {
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
  links: operations.CreateSalesInvoiceNotFoundLinks;

  /** The original data that was passed to this error instance. */
  data$: CreateSalesInvoiceNotFoundHalJSONErrorData;

  constructor(
    err: CreateSalesInvoiceNotFoundHalJSONErrorData,
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

    this.name = "CreateSalesInvoiceNotFoundHalJSONError";
  }
}

/** @internal */
export const CreateSalesInvoiceUnprocessableEntityHalJSONError$inboundSchema:
  z.ZodType<
    CreateSalesInvoiceUnprocessableEntityHalJSONError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status: z.number().int(),
    title: z.string(),
    detail: z.string(),
    field: z.string().optional(),
    _links: z.lazy(() =>
      operations.CreateSalesInvoiceUnprocessableEntityLinks$inboundSchema
    ),
    request$: z.instanceof(Request),
    response$: z.instanceof(Response),
    body$: z.string(),
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "_links": "links",
      });

      return new CreateSalesInvoiceUnprocessableEntityHalJSONError(remapped, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type CreateSalesInvoiceUnprocessableEntityHalJSONError$Outbound = {
  status: number;
  title: string;
  detail: string;
  field?: string | undefined;
  _links: operations.CreateSalesInvoiceUnprocessableEntityLinks$Outbound;
};

/** @internal */
export const CreateSalesInvoiceUnprocessableEntityHalJSONError$outboundSchema:
  z.ZodType<
    CreateSalesInvoiceUnprocessableEntityHalJSONError$Outbound,
    z.ZodTypeDef,
    CreateSalesInvoiceUnprocessableEntityHalJSONError
  > = z.instanceof(CreateSalesInvoiceUnprocessableEntityHalJSONError)
    .transform(v => v.data$)
    .pipe(
      z.object({
        status: z.number().int(),
        title: z.string(),
        detail: z.string(),
        field: z.string().optional(),
        links: z.lazy(() =>
          operations.CreateSalesInvoiceUnprocessableEntityLinks$outboundSchema
        ),
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
export namespace CreateSalesInvoiceUnprocessableEntityHalJSONError$ {
  /** @deprecated use `CreateSalesInvoiceUnprocessableEntityHalJSONError$inboundSchema` instead. */
  export const inboundSchema =
    CreateSalesInvoiceUnprocessableEntityHalJSONError$inboundSchema;
  /** @deprecated use `CreateSalesInvoiceUnprocessableEntityHalJSONError$outboundSchema` instead. */
  export const outboundSchema =
    CreateSalesInvoiceUnprocessableEntityHalJSONError$outboundSchema;
  /** @deprecated use `CreateSalesInvoiceUnprocessableEntityHalJSONError$Outbound` instead. */
  export type Outbound =
    CreateSalesInvoiceUnprocessableEntityHalJSONError$Outbound;
}

/** @internal */
export const CreateSalesInvoiceNotFoundHalJSONError$inboundSchema: z.ZodType<
  CreateSalesInvoiceNotFoundHalJSONError,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.number().int(),
  title: z.string(),
  detail: z.string(),
  field: z.string().optional(),
  _links: z.lazy(() =>
    operations.CreateSalesInvoiceNotFoundLinks$inboundSchema
  ),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_links": "links",
    });

    return new CreateSalesInvoiceNotFoundHalJSONError(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type CreateSalesInvoiceNotFoundHalJSONError$Outbound = {
  status: number;
  title: string;
  detail: string;
  field?: string | undefined;
  _links: operations.CreateSalesInvoiceNotFoundLinks$Outbound;
};

/** @internal */
export const CreateSalesInvoiceNotFoundHalJSONError$outboundSchema: z.ZodType<
  CreateSalesInvoiceNotFoundHalJSONError$Outbound,
  z.ZodTypeDef,
  CreateSalesInvoiceNotFoundHalJSONError
> = z.instanceof(CreateSalesInvoiceNotFoundHalJSONError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      status: z.number().int(),
      title: z.string(),
      detail: z.string(),
      field: z.string().optional(),
      links: z.lazy(() =>
        operations.CreateSalesInvoiceNotFoundLinks$outboundSchema
      ),
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
export namespace CreateSalesInvoiceNotFoundHalJSONError$ {
  /** @deprecated use `CreateSalesInvoiceNotFoundHalJSONError$inboundSchema` instead. */
  export const inboundSchema =
    CreateSalesInvoiceNotFoundHalJSONError$inboundSchema;
  /** @deprecated use `CreateSalesInvoiceNotFoundHalJSONError$outboundSchema` instead. */
  export const outboundSchema =
    CreateSalesInvoiceNotFoundHalJSONError$outboundSchema;
  /** @deprecated use `CreateSalesInvoiceNotFoundHalJSONError$Outbound` instead. */
  export type Outbound = CreateSalesInvoiceNotFoundHalJSONError$Outbound;
}

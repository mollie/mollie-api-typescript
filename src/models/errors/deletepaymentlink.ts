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
export type DeletePaymentLinkUnprocessableEntityHalJSONErrorData = {
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
  links: operations.DeletePaymentLinkUnprocessableEntityLinks;
};

/**
 * An error response object.
 */
export class DeletePaymentLinkUnprocessableEntityHalJSONError
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
  links: operations.DeletePaymentLinkUnprocessableEntityLinks;

  /** The original data that was passed to this error instance. */
  data$: DeletePaymentLinkUnprocessableEntityHalJSONErrorData;

  constructor(
    err: DeletePaymentLinkUnprocessableEntityHalJSONErrorData,
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

    this.name = "DeletePaymentLinkUnprocessableEntityHalJSONError";
  }
}

/**
 * An error response object.
 */
export type DeletePaymentLinkNotFoundHalJSONErrorData = {
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
  links: operations.DeletePaymentLinkNotFoundLinks;
};

/**
 * An error response object.
 */
export class DeletePaymentLinkNotFoundHalJSONError extends ClientError {
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
  links: operations.DeletePaymentLinkNotFoundLinks;

  /** The original data that was passed to this error instance. */
  data$: DeletePaymentLinkNotFoundHalJSONErrorData;

  constructor(
    err: DeletePaymentLinkNotFoundHalJSONErrorData,
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

    this.name = "DeletePaymentLinkNotFoundHalJSONError";
  }
}

/** @internal */
export const DeletePaymentLinkUnprocessableEntityHalJSONError$inboundSchema:
  z.ZodType<
    DeletePaymentLinkUnprocessableEntityHalJSONError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    status: z.number().int(),
    title: z.string(),
    detail: z.string(),
    field: z.string().optional(),
    _links: z.lazy(() =>
      operations.DeletePaymentLinkUnprocessableEntityLinks$inboundSchema
    ),
    request$: z.instanceof(Request),
    response$: z.instanceof(Response),
    body$: z.string(),
  })
    .transform((v) => {
      const remapped = remap$(v, {
        "_links": "links",
      });

      return new DeletePaymentLinkUnprocessableEntityHalJSONError(remapped, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type DeletePaymentLinkUnprocessableEntityHalJSONError$Outbound = {
  status: number;
  title: string;
  detail: string;
  field?: string | undefined;
  _links: operations.DeletePaymentLinkUnprocessableEntityLinks$Outbound;
};

/** @internal */
export const DeletePaymentLinkUnprocessableEntityHalJSONError$outboundSchema:
  z.ZodType<
    DeletePaymentLinkUnprocessableEntityHalJSONError$Outbound,
    z.ZodTypeDef,
    DeletePaymentLinkUnprocessableEntityHalJSONError
  > = z.instanceof(DeletePaymentLinkUnprocessableEntityHalJSONError)
    .transform(v => v.data$)
    .pipe(
      z.object({
        status: z.number().int(),
        title: z.string(),
        detail: z.string(),
        field: z.string().optional(),
        links: z.lazy(() =>
          operations.DeletePaymentLinkUnprocessableEntityLinks$outboundSchema
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
export namespace DeletePaymentLinkUnprocessableEntityHalJSONError$ {
  /** @deprecated use `DeletePaymentLinkUnprocessableEntityHalJSONError$inboundSchema` instead. */
  export const inboundSchema =
    DeletePaymentLinkUnprocessableEntityHalJSONError$inboundSchema;
  /** @deprecated use `DeletePaymentLinkUnprocessableEntityHalJSONError$outboundSchema` instead. */
  export const outboundSchema =
    DeletePaymentLinkUnprocessableEntityHalJSONError$outboundSchema;
  /** @deprecated use `DeletePaymentLinkUnprocessableEntityHalJSONError$Outbound` instead. */
  export type Outbound =
    DeletePaymentLinkUnprocessableEntityHalJSONError$Outbound;
}

/** @internal */
export const DeletePaymentLinkNotFoundHalJSONError$inboundSchema: z.ZodType<
  DeletePaymentLinkNotFoundHalJSONError,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.number().int(),
  title: z.string(),
  detail: z.string(),
  field: z.string().optional(),
  _links: z.lazy(() => operations.DeletePaymentLinkNotFoundLinks$inboundSchema),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_links": "links",
    });

    return new DeletePaymentLinkNotFoundHalJSONError(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type DeletePaymentLinkNotFoundHalJSONError$Outbound = {
  status: number;
  title: string;
  detail: string;
  field?: string | undefined;
  _links: operations.DeletePaymentLinkNotFoundLinks$Outbound;
};

/** @internal */
export const DeletePaymentLinkNotFoundHalJSONError$outboundSchema: z.ZodType<
  DeletePaymentLinkNotFoundHalJSONError$Outbound,
  z.ZodTypeDef,
  DeletePaymentLinkNotFoundHalJSONError
> = z.instanceof(DeletePaymentLinkNotFoundHalJSONError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      status: z.number().int(),
      title: z.string(),
      detail: z.string(),
      field: z.string().optional(),
      links: z.lazy(() =>
        operations.DeletePaymentLinkNotFoundLinks$outboundSchema
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
export namespace DeletePaymentLinkNotFoundHalJSONError$ {
  /** @deprecated use `DeletePaymentLinkNotFoundHalJSONError$inboundSchema` instead. */
  export const inboundSchema =
    DeletePaymentLinkNotFoundHalJSONError$inboundSchema;
  /** @deprecated use `DeletePaymentLinkNotFoundHalJSONError$outboundSchema` instead. */
  export const outboundSchema =
    DeletePaymentLinkNotFoundHalJSONError$outboundSchema;
  /** @deprecated use `DeletePaymentLinkNotFoundHalJSONError$Outbound` instead. */
  export type Outbound = DeletePaymentLinkNotFoundHalJSONError$Outbound;
}

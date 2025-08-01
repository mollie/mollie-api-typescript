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
export type CreateCustomerHalJSONErrorData = {
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
  links: operations.CreateCustomerNotFoundLinks;
};

/**
 * An error response object.
 */
export class CreateCustomerHalJSONError extends ClientError {
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
  links: operations.CreateCustomerNotFoundLinks;

  /** The original data that was passed to this error instance. */
  data$: CreateCustomerHalJSONErrorData;

  constructor(
    err: CreateCustomerHalJSONErrorData,
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

    this.name = "CreateCustomerHalJSONError";
  }
}

/** @internal */
export const CreateCustomerHalJSONError$inboundSchema: z.ZodType<
  CreateCustomerHalJSONError,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.number().int(),
  title: z.string(),
  detail: z.string(),
  field: z.string().optional(),
  _links: z.lazy(() => operations.CreateCustomerNotFoundLinks$inboundSchema),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "_links": "links",
    });

    return new CreateCustomerHalJSONError(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type CreateCustomerHalJSONError$Outbound = {
  status: number;
  title: string;
  detail: string;
  field?: string | undefined;
  _links: operations.CreateCustomerNotFoundLinks$Outbound;
};

/** @internal */
export const CreateCustomerHalJSONError$outboundSchema: z.ZodType<
  CreateCustomerHalJSONError$Outbound,
  z.ZodTypeDef,
  CreateCustomerHalJSONError
> = z.instanceof(CreateCustomerHalJSONError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      status: z.number().int(),
      title: z.string(),
      detail: z.string(),
      field: z.string().optional(),
      links: z.lazy(() =>
        operations.CreateCustomerNotFoundLinks$outboundSchema
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
export namespace CreateCustomerHalJSONError$ {
  /** @deprecated use `CreateCustomerHalJSONError$inboundSchema` instead. */
  export const inboundSchema = CreateCustomerHalJSONError$inboundSchema;
  /** @deprecated use `CreateCustomerHalJSONError$outboundSchema` instead. */
  export const outboundSchema = CreateCustomerHalJSONError$outboundSchema;
  /** @deprecated use `CreateCustomerHalJSONError$Outbound` instead. */
  export type Outbound = CreateCustomerHalJSONError$Outbound;
}

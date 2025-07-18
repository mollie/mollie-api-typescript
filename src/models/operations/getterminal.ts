/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTerminalRequest = {
  /**
   * Provide the ID of the related terminal.
   */
  terminalId: string;
  /**
   * Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query parameter can be omitted. For organization-level credentials such as OAuth access tokens, you can enable test mode by setting the `testmode` query parameter to `true`.
   *
   * @remarks
   *
   * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
   */
  testmode?: boolean | null | undefined;
};

/**
 * The URL to the generic Mollie API error handling guide.
 */
export type GetTerminalNotFoundDocumentation = {
  href: string;
  type: string;
};

export type GetTerminalNotFoundLinks = {
  /**
   * The URL to the generic Mollie API error handling guide.
   */
  documentation: GetTerminalNotFoundDocumentation;
};

/**
 * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
 */
export type GetTerminalSelf = {
  /**
   * The actual URL string.
   */
  href: string;
  /**
   * The content type of the page or endpoint the URL points to.
   */
  type: string;
};

/**
 * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
 */
export type GetTerminalDocumentation = {
  /**
   * The actual URL string.
   */
  href: string;
  /**
   * The content type of the page or endpoint the URL points to.
   */
  type: string;
};

/**
 * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
 */
export type GetTerminalLinks = {
  /**
   * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
   */
  self: GetTerminalSelf;
  /**
   * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
   */
  documentation: GetTerminalDocumentation;
};

/**
 * The terminal object.
 */
export type GetTerminalResponse = {
  /**
   * Indicates the response contains a terminal object. Will always contain the string `terminal` for this endpoint.
   */
  resource?: string | undefined;
  /**
   * The identifier uniquely referring to this terminal. Example: `term_7MgL4wea46qkRcoTZjWEH`.
   */
  id: string;
  /**
   * Whether this entity was created in live mode or in test mode.
   *
   * @remarks
   *
   * Possible values: `live` `test`
   */
  mode: string;
  /**
   * A short description of the terminal. The description can be used as an identifier for the terminal. Currently, the description is set when the terminal is initially configured. It will be visible in the Mollie Dashboard, and it may be visible on the device itself depending on the device.
   */
  description: string;
  /**
   * The status of the terminal.
   *
   * @remarks
   *
   * Possible values: `pending` `active` `inactive`
   */
  status: string;
  /**
   * The brand of the terminal.
   *
   * @remarks
   *
   * Possible values: `PAX`
   */
  brand: string | null;
  /**
   * The model of the terminal. For example for a PAX A920, this field's value will be `A920`.
   *
   * @remarks
   *
   * Possible values: `A35` `A77` `A920` `A920 Pro` `IM30`
   */
  model: string | null;
  /**
   * The serial number of the terminal. The serial number is provided at terminal creation time.
   */
  serialNumber: string | null;
  /**
   * The currency configured on the terminal, in ISO 4217 format. Currently most of our terminals are bound to a specific currency, chosen during setup.
   */
  currency: string;
  /**
   * The identifier referring to the [profile](get-profile) this entity belongs to.
   *
   * @remarks
   *
   * Most API credentials are linked to a single profile. In these cases the `profileId` can be omitted in the creation request. For organization-level credentials such as OAuth access tokens however, the `profileId` parameter is required.
   */
  profileId: string;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  createdAt: string;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  updatedAt: string;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
   */
  links: GetTerminalLinks;
};

/** @internal */
export const GetTerminalRequest$inboundSchema: z.ZodType<
  GetTerminalRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  terminalId: z.string(),
  testmode: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type GetTerminalRequest$Outbound = {
  terminalId: string;
  testmode?: boolean | null | undefined;
};

/** @internal */
export const GetTerminalRequest$outboundSchema: z.ZodType<
  GetTerminalRequest$Outbound,
  z.ZodTypeDef,
  GetTerminalRequest
> = z.object({
  terminalId: z.string(),
  testmode: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTerminalRequest$ {
  /** @deprecated use `GetTerminalRequest$inboundSchema` instead. */
  export const inboundSchema = GetTerminalRequest$inboundSchema;
  /** @deprecated use `GetTerminalRequest$outboundSchema` instead. */
  export const outboundSchema = GetTerminalRequest$outboundSchema;
  /** @deprecated use `GetTerminalRequest$Outbound` instead. */
  export type Outbound = GetTerminalRequest$Outbound;
}

export function getTerminalRequestToJSON(
  getTerminalRequest: GetTerminalRequest,
): string {
  return JSON.stringify(
    GetTerminalRequest$outboundSchema.parse(getTerminalRequest),
  );
}

export function getTerminalRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetTerminalRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTerminalRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTerminalRequest' from JSON`,
  );
}

/** @internal */
export const GetTerminalNotFoundDocumentation$inboundSchema: z.ZodType<
  GetTerminalNotFoundDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  type: z.string(),
});

/** @internal */
export type GetTerminalNotFoundDocumentation$Outbound = {
  href: string;
  type: string;
};

/** @internal */
export const GetTerminalNotFoundDocumentation$outboundSchema: z.ZodType<
  GetTerminalNotFoundDocumentation$Outbound,
  z.ZodTypeDef,
  GetTerminalNotFoundDocumentation
> = z.object({
  href: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTerminalNotFoundDocumentation$ {
  /** @deprecated use `GetTerminalNotFoundDocumentation$inboundSchema` instead. */
  export const inboundSchema = GetTerminalNotFoundDocumentation$inboundSchema;
  /** @deprecated use `GetTerminalNotFoundDocumentation$outboundSchema` instead. */
  export const outboundSchema = GetTerminalNotFoundDocumentation$outboundSchema;
  /** @deprecated use `GetTerminalNotFoundDocumentation$Outbound` instead. */
  export type Outbound = GetTerminalNotFoundDocumentation$Outbound;
}

export function getTerminalNotFoundDocumentationToJSON(
  getTerminalNotFoundDocumentation: GetTerminalNotFoundDocumentation,
): string {
  return JSON.stringify(
    GetTerminalNotFoundDocumentation$outboundSchema.parse(
      getTerminalNotFoundDocumentation,
    ),
  );
}

export function getTerminalNotFoundDocumentationFromJSON(
  jsonString: string,
): SafeParseResult<GetTerminalNotFoundDocumentation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTerminalNotFoundDocumentation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTerminalNotFoundDocumentation' from JSON`,
  );
}

/** @internal */
export const GetTerminalNotFoundLinks$inboundSchema: z.ZodType<
  GetTerminalNotFoundLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  documentation: z.lazy(() => GetTerminalNotFoundDocumentation$inboundSchema),
});

/** @internal */
export type GetTerminalNotFoundLinks$Outbound = {
  documentation: GetTerminalNotFoundDocumentation$Outbound;
};

/** @internal */
export const GetTerminalNotFoundLinks$outboundSchema: z.ZodType<
  GetTerminalNotFoundLinks$Outbound,
  z.ZodTypeDef,
  GetTerminalNotFoundLinks
> = z.object({
  documentation: z.lazy(() => GetTerminalNotFoundDocumentation$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTerminalNotFoundLinks$ {
  /** @deprecated use `GetTerminalNotFoundLinks$inboundSchema` instead. */
  export const inboundSchema = GetTerminalNotFoundLinks$inboundSchema;
  /** @deprecated use `GetTerminalNotFoundLinks$outboundSchema` instead. */
  export const outboundSchema = GetTerminalNotFoundLinks$outboundSchema;
  /** @deprecated use `GetTerminalNotFoundLinks$Outbound` instead. */
  export type Outbound = GetTerminalNotFoundLinks$Outbound;
}

export function getTerminalNotFoundLinksToJSON(
  getTerminalNotFoundLinks: GetTerminalNotFoundLinks,
): string {
  return JSON.stringify(
    GetTerminalNotFoundLinks$outboundSchema.parse(getTerminalNotFoundLinks),
  );
}

export function getTerminalNotFoundLinksFromJSON(
  jsonString: string,
): SafeParseResult<GetTerminalNotFoundLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTerminalNotFoundLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTerminalNotFoundLinks' from JSON`,
  );
}

/** @internal */
export const GetTerminalSelf$inboundSchema: z.ZodType<
  GetTerminalSelf,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  type: z.string(),
});

/** @internal */
export type GetTerminalSelf$Outbound = {
  href: string;
  type: string;
};

/** @internal */
export const GetTerminalSelf$outboundSchema: z.ZodType<
  GetTerminalSelf$Outbound,
  z.ZodTypeDef,
  GetTerminalSelf
> = z.object({
  href: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTerminalSelf$ {
  /** @deprecated use `GetTerminalSelf$inboundSchema` instead. */
  export const inboundSchema = GetTerminalSelf$inboundSchema;
  /** @deprecated use `GetTerminalSelf$outboundSchema` instead. */
  export const outboundSchema = GetTerminalSelf$outboundSchema;
  /** @deprecated use `GetTerminalSelf$Outbound` instead. */
  export type Outbound = GetTerminalSelf$Outbound;
}

export function getTerminalSelfToJSON(
  getTerminalSelf: GetTerminalSelf,
): string {
  return JSON.stringify(GetTerminalSelf$outboundSchema.parse(getTerminalSelf));
}

export function getTerminalSelfFromJSON(
  jsonString: string,
): SafeParseResult<GetTerminalSelf, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTerminalSelf$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTerminalSelf' from JSON`,
  );
}

/** @internal */
export const GetTerminalDocumentation$inboundSchema: z.ZodType<
  GetTerminalDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  type: z.string(),
});

/** @internal */
export type GetTerminalDocumentation$Outbound = {
  href: string;
  type: string;
};

/** @internal */
export const GetTerminalDocumentation$outboundSchema: z.ZodType<
  GetTerminalDocumentation$Outbound,
  z.ZodTypeDef,
  GetTerminalDocumentation
> = z.object({
  href: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTerminalDocumentation$ {
  /** @deprecated use `GetTerminalDocumentation$inboundSchema` instead. */
  export const inboundSchema = GetTerminalDocumentation$inboundSchema;
  /** @deprecated use `GetTerminalDocumentation$outboundSchema` instead. */
  export const outboundSchema = GetTerminalDocumentation$outboundSchema;
  /** @deprecated use `GetTerminalDocumentation$Outbound` instead. */
  export type Outbound = GetTerminalDocumentation$Outbound;
}

export function getTerminalDocumentationToJSON(
  getTerminalDocumentation: GetTerminalDocumentation,
): string {
  return JSON.stringify(
    GetTerminalDocumentation$outboundSchema.parse(getTerminalDocumentation),
  );
}

export function getTerminalDocumentationFromJSON(
  jsonString: string,
): SafeParseResult<GetTerminalDocumentation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTerminalDocumentation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTerminalDocumentation' from JSON`,
  );
}

/** @internal */
export const GetTerminalLinks$inboundSchema: z.ZodType<
  GetTerminalLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  self: z.lazy(() => GetTerminalSelf$inboundSchema),
  documentation: z.lazy(() => GetTerminalDocumentation$inboundSchema),
});

/** @internal */
export type GetTerminalLinks$Outbound = {
  self: GetTerminalSelf$Outbound;
  documentation: GetTerminalDocumentation$Outbound;
};

/** @internal */
export const GetTerminalLinks$outboundSchema: z.ZodType<
  GetTerminalLinks$Outbound,
  z.ZodTypeDef,
  GetTerminalLinks
> = z.object({
  self: z.lazy(() => GetTerminalSelf$outboundSchema),
  documentation: z.lazy(() => GetTerminalDocumentation$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTerminalLinks$ {
  /** @deprecated use `GetTerminalLinks$inboundSchema` instead. */
  export const inboundSchema = GetTerminalLinks$inboundSchema;
  /** @deprecated use `GetTerminalLinks$outboundSchema` instead. */
  export const outboundSchema = GetTerminalLinks$outboundSchema;
  /** @deprecated use `GetTerminalLinks$Outbound` instead. */
  export type Outbound = GetTerminalLinks$Outbound;
}

export function getTerminalLinksToJSON(
  getTerminalLinks: GetTerminalLinks,
): string {
  return JSON.stringify(
    GetTerminalLinks$outboundSchema.parse(getTerminalLinks),
  );
}

export function getTerminalLinksFromJSON(
  jsonString: string,
): SafeParseResult<GetTerminalLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTerminalLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTerminalLinks' from JSON`,
  );
}

/** @internal */
export const GetTerminalResponse$inboundSchema: z.ZodType<
  GetTerminalResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource: z.string().default("terminal"),
  id: z.string(),
  mode: z.string(),
  description: z.string(),
  status: z.string(),
  brand: z.nullable(z.string()),
  model: z.nullable(z.string()),
  serialNumber: z.nullable(z.string()),
  currency: z.string(),
  profileId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  _links: z.lazy(() => GetTerminalLinks$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type GetTerminalResponse$Outbound = {
  resource: string;
  id: string;
  mode: string;
  description: string;
  status: string;
  brand: string | null;
  model: string | null;
  serialNumber: string | null;
  currency: string;
  profileId: string;
  createdAt: string;
  updatedAt: string;
  _links: GetTerminalLinks$Outbound;
};

/** @internal */
export const GetTerminalResponse$outboundSchema: z.ZodType<
  GetTerminalResponse$Outbound,
  z.ZodTypeDef,
  GetTerminalResponse
> = z.object({
  resource: z.string().default("terminal"),
  id: z.string(),
  mode: z.string(),
  description: z.string(),
  status: z.string(),
  brand: z.nullable(z.string()),
  model: z.nullable(z.string()),
  serialNumber: z.nullable(z.string()),
  currency: z.string(),
  profileId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  links: z.lazy(() => GetTerminalLinks$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTerminalResponse$ {
  /** @deprecated use `GetTerminalResponse$inboundSchema` instead. */
  export const inboundSchema = GetTerminalResponse$inboundSchema;
  /** @deprecated use `GetTerminalResponse$outboundSchema` instead. */
  export const outboundSchema = GetTerminalResponse$outboundSchema;
  /** @deprecated use `GetTerminalResponse$Outbound` instead. */
  export type Outbound = GetTerminalResponse$Outbound;
}

export function getTerminalResponseToJSON(
  getTerminalResponse: GetTerminalResponse,
): string {
  return JSON.stringify(
    GetTerminalResponse$outboundSchema.parse(getTerminalResponse),
  );
}

export function getTerminalResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetTerminalResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTerminalResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTerminalResponse' from JSON`,
  );
}

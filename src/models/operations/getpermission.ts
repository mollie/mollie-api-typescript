/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetPermissionRequest = {
  /**
   * Provide the ID of the related permission.
   */
  permissionId: string;
  /**
   * Most API credentials are specifically created for either live mode or test mode. In those cases the `testmode` query
   *
   * @remarks
   * parameter can be omitted. For organization-level credentials such as OAuth access tokens, you can enable test mode by
   * setting the `testmode` query parameter to `true`.
   *
   * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
   */
  testmode?: boolean | null | undefined;
};

/**
 * The URL to the generic Mollie API error handling guide.
 */
export type GetPermissionNotFoundDocumentation = {
  href: string;
  type: string;
};

export type GetPermissionNotFoundLinks = {
  /**
   * The URL to the generic Mollie API error handling guide.
   */
  documentation: GetPermissionNotFoundDocumentation;
};

/**
 * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
 */
export type GetPermissionSelf = {
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
export type GetPermissionDocumentation = {
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
export type GetPermissionLinks = {
  /**
   * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
   */
  self?: GetPermissionSelf | undefined;
  /**
   * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
   */
  documentation?: GetPermissionDocumentation | undefined;
};

/**
 * The permission object.
 */
export type GetPermissionResponse = {
  /**
   * Indicates the response contains a permission object. Will always contain the string `permission` for this
   *
   * @remarks
   * endpoint.
   */
  resource?: string | undefined;
  /**
   * The identifier uniquely referring to this permission. Example: `payments.read`.
   */
  id?: string | undefined;
  /**
   * A short description of what kind of access the permission enables.
   */
  description?: string | undefined;
  /**
   * Whether this permission is granted to the app by the organization.
   */
  granted?: boolean | undefined;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.
   */
  links?: GetPermissionLinks | undefined;
};

/** @internal */
export const GetPermissionRequest$inboundSchema: z.ZodType<
  GetPermissionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  permissionId: z.string(),
  testmode: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type GetPermissionRequest$Outbound = {
  permissionId: string;
  testmode?: boolean | null | undefined;
};

/** @internal */
export const GetPermissionRequest$outboundSchema: z.ZodType<
  GetPermissionRequest$Outbound,
  z.ZodTypeDef,
  GetPermissionRequest
> = z.object({
  permissionId: z.string(),
  testmode: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPermissionRequest$ {
  /** @deprecated use `GetPermissionRequest$inboundSchema` instead. */
  export const inboundSchema = GetPermissionRequest$inboundSchema;
  /** @deprecated use `GetPermissionRequest$outboundSchema` instead. */
  export const outboundSchema = GetPermissionRequest$outboundSchema;
  /** @deprecated use `GetPermissionRequest$Outbound` instead. */
  export type Outbound = GetPermissionRequest$Outbound;
}

export function getPermissionRequestToJSON(
  getPermissionRequest: GetPermissionRequest,
): string {
  return JSON.stringify(
    GetPermissionRequest$outboundSchema.parse(getPermissionRequest),
  );
}

export function getPermissionRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetPermissionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPermissionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPermissionRequest' from JSON`,
  );
}

/** @internal */
export const GetPermissionNotFoundDocumentation$inboundSchema: z.ZodType<
  GetPermissionNotFoundDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  type: z.string(),
});

/** @internal */
export type GetPermissionNotFoundDocumentation$Outbound = {
  href: string;
  type: string;
};

/** @internal */
export const GetPermissionNotFoundDocumentation$outboundSchema: z.ZodType<
  GetPermissionNotFoundDocumentation$Outbound,
  z.ZodTypeDef,
  GetPermissionNotFoundDocumentation
> = z.object({
  href: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPermissionNotFoundDocumentation$ {
  /** @deprecated use `GetPermissionNotFoundDocumentation$inboundSchema` instead. */
  export const inboundSchema = GetPermissionNotFoundDocumentation$inboundSchema;
  /** @deprecated use `GetPermissionNotFoundDocumentation$outboundSchema` instead. */
  export const outboundSchema =
    GetPermissionNotFoundDocumentation$outboundSchema;
  /** @deprecated use `GetPermissionNotFoundDocumentation$Outbound` instead. */
  export type Outbound = GetPermissionNotFoundDocumentation$Outbound;
}

export function getPermissionNotFoundDocumentationToJSON(
  getPermissionNotFoundDocumentation: GetPermissionNotFoundDocumentation,
): string {
  return JSON.stringify(
    GetPermissionNotFoundDocumentation$outboundSchema.parse(
      getPermissionNotFoundDocumentation,
    ),
  );
}

export function getPermissionNotFoundDocumentationFromJSON(
  jsonString: string,
): SafeParseResult<GetPermissionNotFoundDocumentation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetPermissionNotFoundDocumentation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPermissionNotFoundDocumentation' from JSON`,
  );
}

/** @internal */
export const GetPermissionNotFoundLinks$inboundSchema: z.ZodType<
  GetPermissionNotFoundLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  documentation: z.lazy(() => GetPermissionNotFoundDocumentation$inboundSchema),
});

/** @internal */
export type GetPermissionNotFoundLinks$Outbound = {
  documentation: GetPermissionNotFoundDocumentation$Outbound;
};

/** @internal */
export const GetPermissionNotFoundLinks$outboundSchema: z.ZodType<
  GetPermissionNotFoundLinks$Outbound,
  z.ZodTypeDef,
  GetPermissionNotFoundLinks
> = z.object({
  documentation: z.lazy(() =>
    GetPermissionNotFoundDocumentation$outboundSchema
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPermissionNotFoundLinks$ {
  /** @deprecated use `GetPermissionNotFoundLinks$inboundSchema` instead. */
  export const inboundSchema = GetPermissionNotFoundLinks$inboundSchema;
  /** @deprecated use `GetPermissionNotFoundLinks$outboundSchema` instead. */
  export const outboundSchema = GetPermissionNotFoundLinks$outboundSchema;
  /** @deprecated use `GetPermissionNotFoundLinks$Outbound` instead. */
  export type Outbound = GetPermissionNotFoundLinks$Outbound;
}

export function getPermissionNotFoundLinksToJSON(
  getPermissionNotFoundLinks: GetPermissionNotFoundLinks,
): string {
  return JSON.stringify(
    GetPermissionNotFoundLinks$outboundSchema.parse(getPermissionNotFoundLinks),
  );
}

export function getPermissionNotFoundLinksFromJSON(
  jsonString: string,
): SafeParseResult<GetPermissionNotFoundLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPermissionNotFoundLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPermissionNotFoundLinks' from JSON`,
  );
}

/** @internal */
export const GetPermissionSelf$inboundSchema: z.ZodType<
  GetPermissionSelf,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  type: z.string(),
});

/** @internal */
export type GetPermissionSelf$Outbound = {
  href: string;
  type: string;
};

/** @internal */
export const GetPermissionSelf$outboundSchema: z.ZodType<
  GetPermissionSelf$Outbound,
  z.ZodTypeDef,
  GetPermissionSelf
> = z.object({
  href: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPermissionSelf$ {
  /** @deprecated use `GetPermissionSelf$inboundSchema` instead. */
  export const inboundSchema = GetPermissionSelf$inboundSchema;
  /** @deprecated use `GetPermissionSelf$outboundSchema` instead. */
  export const outboundSchema = GetPermissionSelf$outboundSchema;
  /** @deprecated use `GetPermissionSelf$Outbound` instead. */
  export type Outbound = GetPermissionSelf$Outbound;
}

export function getPermissionSelfToJSON(
  getPermissionSelf: GetPermissionSelf,
): string {
  return JSON.stringify(
    GetPermissionSelf$outboundSchema.parse(getPermissionSelf),
  );
}

export function getPermissionSelfFromJSON(
  jsonString: string,
): SafeParseResult<GetPermissionSelf, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPermissionSelf$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPermissionSelf' from JSON`,
  );
}

/** @internal */
export const GetPermissionDocumentation$inboundSchema: z.ZodType<
  GetPermissionDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  type: z.string(),
});

/** @internal */
export type GetPermissionDocumentation$Outbound = {
  href: string;
  type: string;
};

/** @internal */
export const GetPermissionDocumentation$outboundSchema: z.ZodType<
  GetPermissionDocumentation$Outbound,
  z.ZodTypeDef,
  GetPermissionDocumentation
> = z.object({
  href: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPermissionDocumentation$ {
  /** @deprecated use `GetPermissionDocumentation$inboundSchema` instead. */
  export const inboundSchema = GetPermissionDocumentation$inboundSchema;
  /** @deprecated use `GetPermissionDocumentation$outboundSchema` instead. */
  export const outboundSchema = GetPermissionDocumentation$outboundSchema;
  /** @deprecated use `GetPermissionDocumentation$Outbound` instead. */
  export type Outbound = GetPermissionDocumentation$Outbound;
}

export function getPermissionDocumentationToJSON(
  getPermissionDocumentation: GetPermissionDocumentation,
): string {
  return JSON.stringify(
    GetPermissionDocumentation$outboundSchema.parse(getPermissionDocumentation),
  );
}

export function getPermissionDocumentationFromJSON(
  jsonString: string,
): SafeParseResult<GetPermissionDocumentation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPermissionDocumentation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPermissionDocumentation' from JSON`,
  );
}

/** @internal */
export const GetPermissionLinks$inboundSchema: z.ZodType<
  GetPermissionLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  self: z.lazy(() => GetPermissionSelf$inboundSchema).optional(),
  documentation: z.lazy(() => GetPermissionDocumentation$inboundSchema)
    .optional(),
});

/** @internal */
export type GetPermissionLinks$Outbound = {
  self?: GetPermissionSelf$Outbound | undefined;
  documentation?: GetPermissionDocumentation$Outbound | undefined;
};

/** @internal */
export const GetPermissionLinks$outboundSchema: z.ZodType<
  GetPermissionLinks$Outbound,
  z.ZodTypeDef,
  GetPermissionLinks
> = z.object({
  self: z.lazy(() => GetPermissionSelf$outboundSchema).optional(),
  documentation: z.lazy(() => GetPermissionDocumentation$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPermissionLinks$ {
  /** @deprecated use `GetPermissionLinks$inboundSchema` instead. */
  export const inboundSchema = GetPermissionLinks$inboundSchema;
  /** @deprecated use `GetPermissionLinks$outboundSchema` instead. */
  export const outboundSchema = GetPermissionLinks$outboundSchema;
  /** @deprecated use `GetPermissionLinks$Outbound` instead. */
  export type Outbound = GetPermissionLinks$Outbound;
}

export function getPermissionLinksToJSON(
  getPermissionLinks: GetPermissionLinks,
): string {
  return JSON.stringify(
    GetPermissionLinks$outboundSchema.parse(getPermissionLinks),
  );
}

export function getPermissionLinksFromJSON(
  jsonString: string,
): SafeParseResult<GetPermissionLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPermissionLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPermissionLinks' from JSON`,
  );
}

/** @internal */
export const GetPermissionResponse$inboundSchema: z.ZodType<
  GetPermissionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource: z.string().default("permission"),
  id: z.string().optional(),
  description: z.string().optional(),
  granted: z.boolean().optional(),
  _links: z.lazy(() => GetPermissionLinks$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type GetPermissionResponse$Outbound = {
  resource: string;
  id?: string | undefined;
  description?: string | undefined;
  granted?: boolean | undefined;
  _links?: GetPermissionLinks$Outbound | undefined;
};

/** @internal */
export const GetPermissionResponse$outboundSchema: z.ZodType<
  GetPermissionResponse$Outbound,
  z.ZodTypeDef,
  GetPermissionResponse
> = z.object({
  resource: z.string().default("permission"),
  id: z.string().optional(),
  description: z.string().optional(),
  granted: z.boolean().optional(),
  links: z.lazy(() => GetPermissionLinks$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPermissionResponse$ {
  /** @deprecated use `GetPermissionResponse$inboundSchema` instead. */
  export const inboundSchema = GetPermissionResponse$inboundSchema;
  /** @deprecated use `GetPermissionResponse$outboundSchema` instead. */
  export const outboundSchema = GetPermissionResponse$outboundSchema;
  /** @deprecated use `GetPermissionResponse$Outbound` instead. */
  export type Outbound = GetPermissionResponse$Outbound;
}

export function getPermissionResponseToJSON(
  getPermissionResponse: GetPermissionResponse,
): string {
  return JSON.stringify(
    GetPermissionResponse$outboundSchema.parse(getPermissionResponse),
  );
}

export function getPermissionResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetPermissionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPermissionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPermissionResponse' from JSON`,
  );
}

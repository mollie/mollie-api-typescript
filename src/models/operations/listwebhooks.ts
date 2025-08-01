/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from
 *
 * @remarks
 * newest to oldest.
 */
export const ListWebhooksSort = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from
 *
 * @remarks
 * newest to oldest.
 */
export type ListWebhooksSort = ClosedEnum<typeof ListWebhooksSort>;

/**
 * Used to filter out only the webhooks that are subscribed to certain types of events.
 */
export const ListWebhooksEventTypes = {
  PaymentLinkPaid: "payment-link.paid",
  SalesInvoiceCreated: "sales-invoice.created",
  SalesInvoiceIssued: "sales-invoice.issued",
  SalesInvoiceCanceled: "sales-invoice.canceled",
  SalesInvoicePaid: "sales-invoice.paid",
} as const;
/**
 * Used to filter out only the webhooks that are subscribed to certain types of events.
 */
export type ListWebhooksEventTypes = ClosedEnum<typeof ListWebhooksEventTypes>;

export type ListWebhooksRequest = {
  /**
   * Provide an ID to start the result set from the item with the given ID and onwards. This allows you to paginate the
   *
   * @remarks
   * result set.
   */
  from?: string | undefined;
  /**
   * The maximum number of items to return. Defaults to 50 items.
   */
  limit?: number | null | undefined;
  /**
   * Used for setting the direction of the result set. Defaults to descending order, meaning the results are ordered from
   *
   * @remarks
   * newest to oldest.
   */
  sort?: ListWebhooksSort | null | undefined;
  /**
   * Used to filter out only the webhooks that are subscribed to certain types of events.
   */
  eventTypes?: ListWebhooksEventTypes | undefined;
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
export type ListWebhooksBadRequestDocumentation = {
  href: string;
  type: string;
};

export type ListWebhooksBadRequestLinks = {
  /**
   * The URL to the generic Mollie API error handling guide.
   */
  documentation: ListWebhooksBadRequestDocumentation;
};

/**
 * The subscription's current status.
 */
export const ListWebhooksStatus = {
  Enabled: "enabled",
  Blocked: "blocked",
  Disabled: "disabled",
} as const;
/**
 * The subscription's current status.
 */
export type ListWebhooksStatus = ClosedEnum<typeof ListWebhooksStatus>;

/**
 * The subscription's mode.
 */
export const ListWebhooksMode = {
  Live: "live",
  Test: "test",
} as const;
/**
 * The subscription's mode.
 */
export type ListWebhooksMode = ClosedEnum<typeof ListWebhooksMode>;

export type Webhook = {
  /**
   * Indicates the response contains a webhook subscription object.
   *
   * @remarks
   * Will always contain the string `webhook` for this endpoint.
   */
  resource?: string | undefined;
  /**
   * The identifier uniquely referring to this subscription.
   */
  id?: string | undefined;
  /**
   * The subscription's events destination.
   */
  url?: string | undefined;
  /**
   * The identifier uniquely referring to the profile that created the subscription.
   */
  profileId?: string | undefined;
  /**
   * The subscription's date time of creation.
   */
  createdAt?: string | undefined;
  /**
   * The subscription's name.
   */
  name?: string | undefined;
  /**
   * The events types that are subscribed.
   */
  eventTypes?: Array<string> | undefined;
  /**
   * The subscription's current status.
   */
  status?: ListWebhooksStatus | undefined;
  /**
   * The subscription's mode.
   */
  mode?: ListWebhooksMode | undefined;
};

export type ListWebhooksEmbedded = {
  /**
   * A list of webhooks.
   */
  webhooks?: Array<Webhook> | undefined;
};

/**
 * The URL to the current set of items.
 */
export type ListWebhooksSelf = {
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
 * The previous set of items, if available.
 */
export type ListWebhooksPrevious = {
  /**
   * The actual URL string.
   */
  href?: string | undefined;
  /**
   * The content type of the page or endpoint the URL points to.
   */
  type?: string | undefined;
};

/**
 * The next set of items, if available.
 */
export type ListWebhooksNext = {
  /**
   * The actual URL string.
   */
  href?: string | undefined;
  /**
   * The content type of the page or endpoint the URL points to.
   */
  type?: string | undefined;
};

/**
 * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
 */
export type ListWebhooksDocumentation = {
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
 * Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.
 */
export type ListWebhooksLinks = {
  /**
   * The URL to the current set of items.
   */
  self?: ListWebhooksSelf | undefined;
  /**
   * The previous set of items, if available.
   */
  previous?: ListWebhooksPrevious | null | undefined;
  /**
   * The next set of items, if available.
   */
  next?: ListWebhooksNext | null | undefined;
  /**
   * In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.
   */
  documentation?: ListWebhooksDocumentation | undefined;
};

/**
 * A list of webhooks. For a complete reference of the webhook
 *
 * @remarks
 * object, refer to the [Get hook endpoint](get-webhook) documentation.
 */
export type ListWebhooksResponse = {
  /**
   * The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result
   *
   * @remarks
   * as well.
   *
   * The maximum number of items per result set is controlled by the `limit` property provided in the request. The default
   * limit is 50 items.
   */
  count?: number | undefined;
  embedded?: ListWebhooksEmbedded | undefined;
  /**
   * Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.
   */
  links?: ListWebhooksLinks | undefined;
};

/** @internal */
export const ListWebhooksSort$inboundSchema: z.ZodNativeEnum<
  typeof ListWebhooksSort
> = z.nativeEnum(ListWebhooksSort);

/** @internal */
export const ListWebhooksSort$outboundSchema: z.ZodNativeEnum<
  typeof ListWebhooksSort
> = ListWebhooksSort$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksSort$ {
  /** @deprecated use `ListWebhooksSort$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksSort$inboundSchema;
  /** @deprecated use `ListWebhooksSort$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksSort$outboundSchema;
}

/** @internal */
export const ListWebhooksEventTypes$inboundSchema: z.ZodNativeEnum<
  typeof ListWebhooksEventTypes
> = z.nativeEnum(ListWebhooksEventTypes);

/** @internal */
export const ListWebhooksEventTypes$outboundSchema: z.ZodNativeEnum<
  typeof ListWebhooksEventTypes
> = ListWebhooksEventTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksEventTypes$ {
  /** @deprecated use `ListWebhooksEventTypes$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksEventTypes$inboundSchema;
  /** @deprecated use `ListWebhooksEventTypes$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksEventTypes$outboundSchema;
}

/** @internal */
export const ListWebhooksRequest$inboundSchema: z.ZodType<
  ListWebhooksRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  from: z.string().optional(),
  limit: z.nullable(z.number().int().default(50)),
  sort: z.nullable(ListWebhooksSort$inboundSchema.default("desc")),
  eventTypes: ListWebhooksEventTypes$inboundSchema.optional(),
  testmode: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type ListWebhooksRequest$Outbound = {
  from?: string | undefined;
  limit: number | null;
  sort: string | null;
  eventTypes?: string | undefined;
  testmode?: boolean | null | undefined;
};

/** @internal */
export const ListWebhooksRequest$outboundSchema: z.ZodType<
  ListWebhooksRequest$Outbound,
  z.ZodTypeDef,
  ListWebhooksRequest
> = z.object({
  from: z.string().optional(),
  limit: z.nullable(z.number().int().default(50)),
  sort: z.nullable(ListWebhooksSort$outboundSchema.default("desc")),
  eventTypes: ListWebhooksEventTypes$outboundSchema.optional(),
  testmode: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksRequest$ {
  /** @deprecated use `ListWebhooksRequest$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksRequest$inboundSchema;
  /** @deprecated use `ListWebhooksRequest$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksRequest$outboundSchema;
  /** @deprecated use `ListWebhooksRequest$Outbound` instead. */
  export type Outbound = ListWebhooksRequest$Outbound;
}

export function listWebhooksRequestToJSON(
  listWebhooksRequest: ListWebhooksRequest,
): string {
  return JSON.stringify(
    ListWebhooksRequest$outboundSchema.parse(listWebhooksRequest),
  );
}

export function listWebhooksRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhooksRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWebhooksRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhooksRequest' from JSON`,
  );
}

/** @internal */
export const ListWebhooksBadRequestDocumentation$inboundSchema: z.ZodType<
  ListWebhooksBadRequestDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  type: z.string(),
});

/** @internal */
export type ListWebhooksBadRequestDocumentation$Outbound = {
  href: string;
  type: string;
};

/** @internal */
export const ListWebhooksBadRequestDocumentation$outboundSchema: z.ZodType<
  ListWebhooksBadRequestDocumentation$Outbound,
  z.ZodTypeDef,
  ListWebhooksBadRequestDocumentation
> = z.object({
  href: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksBadRequestDocumentation$ {
  /** @deprecated use `ListWebhooksBadRequestDocumentation$inboundSchema` instead. */
  export const inboundSchema =
    ListWebhooksBadRequestDocumentation$inboundSchema;
  /** @deprecated use `ListWebhooksBadRequestDocumentation$outboundSchema` instead. */
  export const outboundSchema =
    ListWebhooksBadRequestDocumentation$outboundSchema;
  /** @deprecated use `ListWebhooksBadRequestDocumentation$Outbound` instead. */
  export type Outbound = ListWebhooksBadRequestDocumentation$Outbound;
}

export function listWebhooksBadRequestDocumentationToJSON(
  listWebhooksBadRequestDocumentation: ListWebhooksBadRequestDocumentation,
): string {
  return JSON.stringify(
    ListWebhooksBadRequestDocumentation$outboundSchema.parse(
      listWebhooksBadRequestDocumentation,
    ),
  );
}

export function listWebhooksBadRequestDocumentationFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhooksBadRequestDocumentation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListWebhooksBadRequestDocumentation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhooksBadRequestDocumentation' from JSON`,
  );
}

/** @internal */
export const ListWebhooksBadRequestLinks$inboundSchema: z.ZodType<
  ListWebhooksBadRequestLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  documentation: z.lazy(() =>
    ListWebhooksBadRequestDocumentation$inboundSchema
  ),
});

/** @internal */
export type ListWebhooksBadRequestLinks$Outbound = {
  documentation: ListWebhooksBadRequestDocumentation$Outbound;
};

/** @internal */
export const ListWebhooksBadRequestLinks$outboundSchema: z.ZodType<
  ListWebhooksBadRequestLinks$Outbound,
  z.ZodTypeDef,
  ListWebhooksBadRequestLinks
> = z.object({
  documentation: z.lazy(() =>
    ListWebhooksBadRequestDocumentation$outboundSchema
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksBadRequestLinks$ {
  /** @deprecated use `ListWebhooksBadRequestLinks$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksBadRequestLinks$inboundSchema;
  /** @deprecated use `ListWebhooksBadRequestLinks$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksBadRequestLinks$outboundSchema;
  /** @deprecated use `ListWebhooksBadRequestLinks$Outbound` instead. */
  export type Outbound = ListWebhooksBadRequestLinks$Outbound;
}

export function listWebhooksBadRequestLinksToJSON(
  listWebhooksBadRequestLinks: ListWebhooksBadRequestLinks,
): string {
  return JSON.stringify(
    ListWebhooksBadRequestLinks$outboundSchema.parse(
      listWebhooksBadRequestLinks,
    ),
  );
}

export function listWebhooksBadRequestLinksFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhooksBadRequestLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWebhooksBadRequestLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhooksBadRequestLinks' from JSON`,
  );
}

/** @internal */
export const ListWebhooksStatus$inboundSchema: z.ZodNativeEnum<
  typeof ListWebhooksStatus
> = z.nativeEnum(ListWebhooksStatus);

/** @internal */
export const ListWebhooksStatus$outboundSchema: z.ZodNativeEnum<
  typeof ListWebhooksStatus
> = ListWebhooksStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksStatus$ {
  /** @deprecated use `ListWebhooksStatus$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksStatus$inboundSchema;
  /** @deprecated use `ListWebhooksStatus$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksStatus$outboundSchema;
}

/** @internal */
export const ListWebhooksMode$inboundSchema: z.ZodNativeEnum<
  typeof ListWebhooksMode
> = z.nativeEnum(ListWebhooksMode);

/** @internal */
export const ListWebhooksMode$outboundSchema: z.ZodNativeEnum<
  typeof ListWebhooksMode
> = ListWebhooksMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksMode$ {
  /** @deprecated use `ListWebhooksMode$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksMode$inboundSchema;
  /** @deprecated use `ListWebhooksMode$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksMode$outboundSchema;
}

/** @internal */
export const Webhook$inboundSchema: z.ZodType<Webhook, z.ZodTypeDef, unknown> =
  z.object({
    resource: z.string().default("webhook"),
    id: z.string().optional(),
    url: z.string().optional(),
    profileId: z.string().optional(),
    createdAt: z.string().optional(),
    name: z.string().optional(),
    eventTypes: z.array(z.string()).optional(),
    status: ListWebhooksStatus$inboundSchema.optional(),
    mode: ListWebhooksMode$inboundSchema.optional(),
  });

/** @internal */
export type Webhook$Outbound = {
  resource: string;
  id?: string | undefined;
  url?: string | undefined;
  profileId?: string | undefined;
  createdAt?: string | undefined;
  name?: string | undefined;
  eventTypes?: Array<string> | undefined;
  status?: string | undefined;
  mode?: string | undefined;
};

/** @internal */
export const Webhook$outboundSchema: z.ZodType<
  Webhook$Outbound,
  z.ZodTypeDef,
  Webhook
> = z.object({
  resource: z.string().default("webhook"),
  id: z.string().optional(),
  url: z.string().optional(),
  profileId: z.string().optional(),
  createdAt: z.string().optional(),
  name: z.string().optional(),
  eventTypes: z.array(z.string()).optional(),
  status: ListWebhooksStatus$outboundSchema.optional(),
  mode: ListWebhooksMode$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Webhook$ {
  /** @deprecated use `Webhook$inboundSchema` instead. */
  export const inboundSchema = Webhook$inboundSchema;
  /** @deprecated use `Webhook$outboundSchema` instead. */
  export const outboundSchema = Webhook$outboundSchema;
  /** @deprecated use `Webhook$Outbound` instead. */
  export type Outbound = Webhook$Outbound;
}

export function webhookToJSON(webhook: Webhook): string {
  return JSON.stringify(Webhook$outboundSchema.parse(webhook));
}

export function webhookFromJSON(
  jsonString: string,
): SafeParseResult<Webhook, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Webhook$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Webhook' from JSON`,
  );
}

/** @internal */
export const ListWebhooksEmbedded$inboundSchema: z.ZodType<
  ListWebhooksEmbedded,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhooks: z.array(z.lazy(() => Webhook$inboundSchema)).optional(),
});

/** @internal */
export type ListWebhooksEmbedded$Outbound = {
  webhooks?: Array<Webhook$Outbound> | undefined;
};

/** @internal */
export const ListWebhooksEmbedded$outboundSchema: z.ZodType<
  ListWebhooksEmbedded$Outbound,
  z.ZodTypeDef,
  ListWebhooksEmbedded
> = z.object({
  webhooks: z.array(z.lazy(() => Webhook$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksEmbedded$ {
  /** @deprecated use `ListWebhooksEmbedded$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksEmbedded$inboundSchema;
  /** @deprecated use `ListWebhooksEmbedded$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksEmbedded$outboundSchema;
  /** @deprecated use `ListWebhooksEmbedded$Outbound` instead. */
  export type Outbound = ListWebhooksEmbedded$Outbound;
}

export function listWebhooksEmbeddedToJSON(
  listWebhooksEmbedded: ListWebhooksEmbedded,
): string {
  return JSON.stringify(
    ListWebhooksEmbedded$outboundSchema.parse(listWebhooksEmbedded),
  );
}

export function listWebhooksEmbeddedFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhooksEmbedded, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWebhooksEmbedded$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhooksEmbedded' from JSON`,
  );
}

/** @internal */
export const ListWebhooksSelf$inboundSchema: z.ZodType<
  ListWebhooksSelf,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  type: z.string(),
});

/** @internal */
export type ListWebhooksSelf$Outbound = {
  href: string;
  type: string;
};

/** @internal */
export const ListWebhooksSelf$outboundSchema: z.ZodType<
  ListWebhooksSelf$Outbound,
  z.ZodTypeDef,
  ListWebhooksSelf
> = z.object({
  href: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksSelf$ {
  /** @deprecated use `ListWebhooksSelf$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksSelf$inboundSchema;
  /** @deprecated use `ListWebhooksSelf$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksSelf$outboundSchema;
  /** @deprecated use `ListWebhooksSelf$Outbound` instead. */
  export type Outbound = ListWebhooksSelf$Outbound;
}

export function listWebhooksSelfToJSON(
  listWebhooksSelf: ListWebhooksSelf,
): string {
  return JSON.stringify(
    ListWebhooksSelf$outboundSchema.parse(listWebhooksSelf),
  );
}

export function listWebhooksSelfFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhooksSelf, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWebhooksSelf$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhooksSelf' from JSON`,
  );
}

/** @internal */
export const ListWebhooksPrevious$inboundSchema: z.ZodType<
  ListWebhooksPrevious,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListWebhooksPrevious$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListWebhooksPrevious$outboundSchema: z.ZodType<
  ListWebhooksPrevious$Outbound,
  z.ZodTypeDef,
  ListWebhooksPrevious
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksPrevious$ {
  /** @deprecated use `ListWebhooksPrevious$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksPrevious$inboundSchema;
  /** @deprecated use `ListWebhooksPrevious$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksPrevious$outboundSchema;
  /** @deprecated use `ListWebhooksPrevious$Outbound` instead. */
  export type Outbound = ListWebhooksPrevious$Outbound;
}

export function listWebhooksPreviousToJSON(
  listWebhooksPrevious: ListWebhooksPrevious,
): string {
  return JSON.stringify(
    ListWebhooksPrevious$outboundSchema.parse(listWebhooksPrevious),
  );
}

export function listWebhooksPreviousFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhooksPrevious, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWebhooksPrevious$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhooksPrevious' from JSON`,
  );
}

/** @internal */
export const ListWebhooksNext$inboundSchema: z.ZodType<
  ListWebhooksNext,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/** @internal */
export type ListWebhooksNext$Outbound = {
  href?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const ListWebhooksNext$outboundSchema: z.ZodType<
  ListWebhooksNext$Outbound,
  z.ZodTypeDef,
  ListWebhooksNext
> = z.object({
  href: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksNext$ {
  /** @deprecated use `ListWebhooksNext$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksNext$inboundSchema;
  /** @deprecated use `ListWebhooksNext$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksNext$outboundSchema;
  /** @deprecated use `ListWebhooksNext$Outbound` instead. */
  export type Outbound = ListWebhooksNext$Outbound;
}

export function listWebhooksNextToJSON(
  listWebhooksNext: ListWebhooksNext,
): string {
  return JSON.stringify(
    ListWebhooksNext$outboundSchema.parse(listWebhooksNext),
  );
}

export function listWebhooksNextFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhooksNext, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWebhooksNext$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhooksNext' from JSON`,
  );
}

/** @internal */
export const ListWebhooksDocumentation$inboundSchema: z.ZodType<
  ListWebhooksDocumentation,
  z.ZodTypeDef,
  unknown
> = z.object({
  href: z.string(),
  type: z.string(),
});

/** @internal */
export type ListWebhooksDocumentation$Outbound = {
  href: string;
  type: string;
};

/** @internal */
export const ListWebhooksDocumentation$outboundSchema: z.ZodType<
  ListWebhooksDocumentation$Outbound,
  z.ZodTypeDef,
  ListWebhooksDocumentation
> = z.object({
  href: z.string(),
  type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksDocumentation$ {
  /** @deprecated use `ListWebhooksDocumentation$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksDocumentation$inboundSchema;
  /** @deprecated use `ListWebhooksDocumentation$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksDocumentation$outboundSchema;
  /** @deprecated use `ListWebhooksDocumentation$Outbound` instead. */
  export type Outbound = ListWebhooksDocumentation$Outbound;
}

export function listWebhooksDocumentationToJSON(
  listWebhooksDocumentation: ListWebhooksDocumentation,
): string {
  return JSON.stringify(
    ListWebhooksDocumentation$outboundSchema.parse(listWebhooksDocumentation),
  );
}

export function listWebhooksDocumentationFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhooksDocumentation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWebhooksDocumentation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhooksDocumentation' from JSON`,
  );
}

/** @internal */
export const ListWebhooksLinks$inboundSchema: z.ZodType<
  ListWebhooksLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  self: z.lazy(() => ListWebhooksSelf$inboundSchema).optional(),
  previous: z.nullable(z.lazy(() => ListWebhooksPrevious$inboundSchema))
    .optional(),
  next: z.nullable(z.lazy(() => ListWebhooksNext$inboundSchema)).optional(),
  documentation: z.lazy(() => ListWebhooksDocumentation$inboundSchema)
    .optional(),
});

/** @internal */
export type ListWebhooksLinks$Outbound = {
  self?: ListWebhooksSelf$Outbound | undefined;
  previous?: ListWebhooksPrevious$Outbound | null | undefined;
  next?: ListWebhooksNext$Outbound | null | undefined;
  documentation?: ListWebhooksDocumentation$Outbound | undefined;
};

/** @internal */
export const ListWebhooksLinks$outboundSchema: z.ZodType<
  ListWebhooksLinks$Outbound,
  z.ZodTypeDef,
  ListWebhooksLinks
> = z.object({
  self: z.lazy(() => ListWebhooksSelf$outboundSchema).optional(),
  previous: z.nullable(z.lazy(() => ListWebhooksPrevious$outboundSchema))
    .optional(),
  next: z.nullable(z.lazy(() => ListWebhooksNext$outboundSchema)).optional(),
  documentation: z.lazy(() => ListWebhooksDocumentation$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksLinks$ {
  /** @deprecated use `ListWebhooksLinks$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksLinks$inboundSchema;
  /** @deprecated use `ListWebhooksLinks$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksLinks$outboundSchema;
  /** @deprecated use `ListWebhooksLinks$Outbound` instead. */
  export type Outbound = ListWebhooksLinks$Outbound;
}

export function listWebhooksLinksToJSON(
  listWebhooksLinks: ListWebhooksLinks,
): string {
  return JSON.stringify(
    ListWebhooksLinks$outboundSchema.parse(listWebhooksLinks),
  );
}

export function listWebhooksLinksFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhooksLinks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWebhooksLinks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhooksLinks' from JSON`,
  );
}

/** @internal */
export const ListWebhooksResponse$inboundSchema: z.ZodType<
  ListWebhooksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  count: z.number().int().optional(),
  _embedded: z.lazy(() => ListWebhooksEmbedded$inboundSchema).optional(),
  _links: z.lazy(() => ListWebhooksLinks$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "_embedded": "embedded",
    "_links": "links",
  });
});

/** @internal */
export type ListWebhooksResponse$Outbound = {
  count?: number | undefined;
  _embedded?: ListWebhooksEmbedded$Outbound | undefined;
  _links?: ListWebhooksLinks$Outbound | undefined;
};

/** @internal */
export const ListWebhooksResponse$outboundSchema: z.ZodType<
  ListWebhooksResponse$Outbound,
  z.ZodTypeDef,
  ListWebhooksResponse
> = z.object({
  count: z.number().int().optional(),
  embedded: z.lazy(() => ListWebhooksEmbedded$outboundSchema).optional(),
  links: z.lazy(() => ListWebhooksLinks$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    embedded: "_embedded",
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListWebhooksResponse$ {
  /** @deprecated use `ListWebhooksResponse$inboundSchema` instead. */
  export const inboundSchema = ListWebhooksResponse$inboundSchema;
  /** @deprecated use `ListWebhooksResponse$outboundSchema` instead. */
  export const outboundSchema = ListWebhooksResponse$outboundSchema;
  /** @deprecated use `ListWebhooksResponse$Outbound` instead. */
  export type Outbound = ListWebhooksResponse$Outbound;
}

export function listWebhooksResponseToJSON(
  listWebhooksResponse: ListWebhooksResponse,
): string {
  return JSON.stringify(
    ListWebhooksResponse$outboundSchema.parse(listWebhooksResponse),
  );
}

export function listWebhooksResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListWebhooksResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListWebhooksResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListWebhooksResponse' from JSON`,
  );
}

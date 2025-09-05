# GetWebhookEventLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetWebhookEventLinks } from "mollie-api-typescript/models/operations";

let value: GetWebhookEventLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  documentation: {
    href: "https://...",
    type: "application/hal+json",
  },
  entity: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `self`                                                                                             | [operations.GetWebhookEventSelf](../../models/operations/getwebhookeventself.md)                   | :heavy_check_mark:                                                                                 | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.         |
| `documentation`                                                                                    | [operations.GetWebhookEventDocumentation](../../models/operations/getwebhookeventdocumentation.md) | :heavy_check_mark:                                                                                 | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.         |
| `entity`                                                                                           | [operations.LinksEntity](../../models/operations/linksentity.md)                                   | :heavy_minus_sign:                                                                                 | The API resource URL of the entity that this event belongs to.                                     |
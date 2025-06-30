# ListPermissionsLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListPermissionsLinks } from "mollie-api-typescript/models/operations";

let value: ListPermissionsLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  documentation: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `self`                                                                                             | [operations.ListPermissionsSelf](../../models/operations/listpermissionsself.md)                   | :heavy_minus_sign:                                                                                 | The URL to the current set of items.                                                               |
| `documentation`                                                                                    | [operations.ListPermissionsDocumentation](../../models/operations/listpermissionsdocumentation.md) | :heavy_minus_sign:                                                                                 | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.         |
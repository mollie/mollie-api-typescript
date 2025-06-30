# ListAllMethodsLinks

## Example Usage

```typescript
import { ListAllMethodsLinks } from "mollie-api-typescript/models/operations";

let value: ListAllMethodsLinks = {
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `self`                                                                                           | [operations.ListAllMethodsSelf](../../models/operations/listallmethodsself.md)                   | :heavy_check_mark:                                                                               | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.       |
| `documentation`                                                                                  | [operations.ListAllMethodsDocumentation](../../models/operations/listallmethodsdocumentation.md) | :heavy_check_mark:                                                                               | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.       |
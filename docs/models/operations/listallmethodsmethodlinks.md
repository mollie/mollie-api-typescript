# ListAllMethodsMethodLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListAllMethodsMethodLinks } from "mollie-api-typescript/models/operations";

let value: ListAllMethodsMethodLinks = {
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `self`                                                                                                       | [operations.ListAllMethodsMethodSelf](../../models/operations/listallmethodsmethodself.md)                   | :heavy_check_mark:                                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                   |
| `documentation`                                                                                              | [operations.ListAllMethodsMethodDocumentation](../../models/operations/listallmethodsmethoddocumentation.md) | :heavy_minus_sign:                                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                   |
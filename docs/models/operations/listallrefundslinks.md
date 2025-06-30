# ListAllRefundsLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListAllRefundsLinks } from "mollie-api-typescript/models/operations";

let value: ListAllRefundsLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  previous: {
    href: "https://...",
    type: "application/hal+json",
  },
  next: {
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
| `self`                                                                                           | [operations.ListAllRefundsSelf](../../models/operations/listallrefundsself.md)                   | :heavy_minus_sign:                                                                               | The URL to the current set of items.                                                             |
| `previous`                                                                                       | [operations.ListAllRefundsPrevious](../../models/operations/listallrefundsprevious.md)           | :heavy_minus_sign:                                                                               | The previous set of items, if available.                                                         |
| `next`                                                                                           | [operations.ListAllRefundsNext](../../models/operations/listallrefundsnext.md)                   | :heavy_minus_sign:                                                                               | The next set of items, if available.                                                             |
| `documentation`                                                                                  | [operations.ListAllRefundsDocumentation](../../models/operations/listallrefundsdocumentation.md) | :heavy_minus_sign:                                                                               | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.       |
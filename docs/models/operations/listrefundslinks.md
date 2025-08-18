# ListRefundsLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListRefundsLinks } from "mollie-api-typescript/models/operations";

let value: ListRefundsLinks = {
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `self`                                                                                     | [operations.ListRefundsSelf](../../models/operations/listrefundsself.md)                   | :heavy_check_mark:                                                                         | The URL to the current set of items.                                                       |
| `previous`                                                                                 | [operations.ListRefundsPrevious](../../models/operations/listrefundsprevious.md)           | :heavy_check_mark:                                                                         | The previous set of items, if available.                                                   |
| `next`                                                                                     | [operations.ListRefundsNext](../../models/operations/listrefundsnext.md)                   | :heavy_check_mark:                                                                         | The next set of items, if available.                                                       |
| `documentation`                                                                            | [operations.ListRefundsDocumentation](../../models/operations/listrefundsdocumentation.md) | :heavy_check_mark:                                                                         | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field. |
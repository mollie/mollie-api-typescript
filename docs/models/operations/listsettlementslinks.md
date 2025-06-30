# ListSettlementsLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListSettlementsLinks } from "mollie-api-typescript/models/operations";

let value: ListSettlementsLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  previous: null,
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `self`                                                                                             | [operations.ListSettlementsSelf](../../models/operations/listsettlementsself.md)                   | :heavy_minus_sign:                                                                                 | The URL to the current set of items.                                                               |
| `previous`                                                                                         | [operations.ListSettlementsPrevious](../../models/operations/listsettlementsprevious.md)           | :heavy_minus_sign:                                                                                 | The previous set of items, if available.                                                           |
| `next`                                                                                             | [operations.ListSettlementsNext](../../models/operations/listsettlementsnext.md)                   | :heavy_minus_sign:                                                                                 | The next set of items, if available.                                                               |
| `documentation`                                                                                    | [operations.ListSettlementsDocumentation](../../models/operations/listsettlementsdocumentation.md) | :heavy_minus_sign:                                                                                 | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.         |
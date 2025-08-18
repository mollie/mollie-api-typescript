# ListAllChargebacksLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListAllChargebacksLinks } from "mollie-api-typescript/models/operations";

let value: ListAllChargebacksLinks = {
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                   | [operations.ListAllChargebacksSelf](../../models/operations/listallchargebacksself.md)                   | :heavy_check_mark:                                                                                       | The URL to the current set of items.                                                                     |
| `previous`                                                                                               | [operations.ListAllChargebacksPrevious](../../models/operations/listallchargebacksprevious.md)           | :heavy_check_mark:                                                                                       | The previous set of items, if available.                                                                 |
| `next`                                                                                                   | [operations.ListAllChargebacksNext](../../models/operations/listallchargebacksnext.md)                   | :heavy_check_mark:                                                                                       | The next set of items, if available.                                                                     |
| `documentation`                                                                                          | [operations.ListAllChargebacksDocumentation](../../models/operations/listallchargebacksdocumentation.md) | :heavy_check_mark:                                                                                       | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.               |
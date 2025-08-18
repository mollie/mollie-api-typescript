# ListProfilesLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListProfilesLinks } from "mollie-api-typescript/models/operations";

let value: ListProfilesLinks = {
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `self`                                                                                       | [operations.ListProfilesSelf](../../models/operations/listprofilesself.md)                   | :heavy_check_mark:                                                                           | The URL to the current set of items.                                                         |
| `previous`                                                                                   | [operations.ListProfilesPrevious](../../models/operations/listprofilesprevious.md)           | :heavy_check_mark:                                                                           | The previous set of items, if available.                                                     |
| `next`                                                                                       | [operations.ListProfilesNext](../../models/operations/listprofilesnext.md)                   | :heavy_check_mark:                                                                           | The next set of items, if available.                                                         |
| `documentation`                                                                              | [operations.ListProfilesDocumentation](../../models/operations/listprofilesdocumentation.md) | :heavy_check_mark:                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.   |
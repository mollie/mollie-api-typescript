# ListTerminalsLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListTerminalsLinks } from "mollie-api-typescript/models/operations";

let value: ListTerminalsLinks = {
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `self`                                                                                         | [operations.ListTerminalsSelf](../../models/operations/listterminalsself.md)                   | :heavy_minus_sign:                                                                             | The URL to the current set of items.                                                           |
| `previous`                                                                                     | [operations.ListTerminalsPrevious](../../models/operations/listterminalsprevious.md)           | :heavy_minus_sign:                                                                             | The previous set of items, if available.                                                       |
| `next`                                                                                         | [operations.ListTerminalsNext](../../models/operations/listterminalsnext.md)                   | :heavy_minus_sign:                                                                             | The next set of items, if available.                                                           |
| `documentation`                                                                                | [operations.ListTerminalsDocumentation](../../models/operations/listterminalsdocumentation.md) | :heavy_minus_sign:                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.     |
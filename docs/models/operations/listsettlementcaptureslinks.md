# ListSettlementCapturesLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListSettlementCapturesLinks } from "mollie-api-typescript/models/operations";

let value: ListSettlementCapturesLinks = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                           | [operations.ListSettlementCapturesSelf](../../models/operations/listsettlementcapturesself.md)                   | :heavy_check_mark:                                                                                               | The URL to the current set of items.                                                                             |
| `previous`                                                                                                       | [operations.ListSettlementCapturesPrevious](../../models/operations/listsettlementcapturesprevious.md)           | :heavy_check_mark:                                                                                               | The previous set of items, if available.                                                                         |
| `next`                                                                                                           | [operations.ListSettlementCapturesNext](../../models/operations/listsettlementcapturesnext.md)                   | :heavy_check_mark:                                                                                               | The next set of items, if available.                                                                             |
| `documentation`                                                                                                  | [operations.ListSettlementCapturesDocumentation](../../models/operations/listsettlementcapturesdocumentation.md) | :heavy_check_mark:                                                                                               | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                       |
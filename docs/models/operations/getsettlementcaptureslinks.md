# GetSettlementCapturesLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetSettlementCapturesLinks } from "mollie-api-typescript/models/operations";

let value: GetSettlementCapturesLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  previous: {
    href: "https://...",
    type: "application/hal+json",
  },
  next: null,
  documentation: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                         | [operations.GetSettlementCapturesSelf](../../models/operations/getsettlementcapturesself.md)                   | :heavy_minus_sign:                                                                                             | The URL to the current set of items.                                                                           |
| `previous`                                                                                                     | [operations.GetSettlementCapturesPrevious](../../models/operations/getsettlementcapturesprevious.md)           | :heavy_minus_sign:                                                                                             | The previous set of items, if available.                                                                       |
| `next`                                                                                                         | [operations.GetSettlementCapturesNext](../../models/operations/getsettlementcapturesnext.md)                   | :heavy_minus_sign:                                                                                             | The next set of items, if available.                                                                           |
| `documentation`                                                                                                | [operations.GetSettlementCapturesDocumentation](../../models/operations/getsettlementcapturesdocumentation.md) | :heavy_minus_sign:                                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                     |
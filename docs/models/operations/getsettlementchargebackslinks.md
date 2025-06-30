# GetSettlementChargebacksLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetSettlementChargebacksLinks } from "mollie-api-typescript/models/operations";

let value: GetSettlementChargebacksLinks = {
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                               | [operations.GetSettlementChargebacksSelf](../../models/operations/getsettlementchargebacksself.md)                   | :heavy_minus_sign:                                                                                                   | The URL to the current set of items.                                                                                 |
| `previous`                                                                                                           | [operations.GetSettlementChargebacksPrevious](../../models/operations/getsettlementchargebacksprevious.md)           | :heavy_minus_sign:                                                                                                   | The previous set of items, if available.                                                                             |
| `next`                                                                                                               | [operations.GetSettlementChargebacksNext](../../models/operations/getsettlementchargebacksnext.md)                   | :heavy_minus_sign:                                                                                                   | The next set of items, if available.                                                                                 |
| `documentation`                                                                                                      | [operations.GetSettlementChargebacksDocumentation](../../models/operations/getsettlementchargebacksdocumentation.md) | :heavy_minus_sign:                                                                                                   | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                           |
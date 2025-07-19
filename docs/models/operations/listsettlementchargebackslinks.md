# ListSettlementChargebacksLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListSettlementChargebacksLinks } from "mollie-api-typescript/models/operations";

let value: ListSettlementChargebacksLinks = {
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                 | [operations.ListSettlementChargebacksSelf](../../models/operations/listsettlementchargebacksself.md)                   | :heavy_minus_sign:                                                                                                     | The URL to the current set of items.                                                                                   |
| `previous`                                                                                                             | [operations.ListSettlementChargebacksPrevious](../../models/operations/listsettlementchargebacksprevious.md)           | :heavy_minus_sign:                                                                                                     | The previous set of items, if available.                                                                               |
| `next`                                                                                                                 | [operations.ListSettlementChargebacksNext](../../models/operations/listsettlementchargebacksnext.md)                   | :heavy_minus_sign:                                                                                                     | The next set of items, if available.                                                                                   |
| `documentation`                                                                                                        | [operations.ListSettlementChargebacksDocumentation](../../models/operations/listsettlementchargebacksdocumentation.md) | :heavy_minus_sign:                                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                             |
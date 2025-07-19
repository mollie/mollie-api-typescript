# ListSettlementRefundsLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListSettlementRefundsLinks } from "mollie-api-typescript/models/operations";

let value: ListSettlementRefundsLinks = {
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
| `self`                                                                                                         | [operations.ListSettlementRefundsSelf](../../models/operations/listsettlementrefundsself.md)                   | :heavy_minus_sign:                                                                                             | The URL to the current set of items.                                                                           |
| `previous`                                                                                                     | [operations.ListSettlementRefundsPrevious](../../models/operations/listsettlementrefundsprevious.md)           | :heavy_minus_sign:                                                                                             | The previous set of items, if available.                                                                       |
| `next`                                                                                                         | [operations.ListSettlementRefundsNext](../../models/operations/listsettlementrefundsnext.md)                   | :heavy_minus_sign:                                                                                             | The next set of items, if available.                                                                           |
| `documentation`                                                                                                | [operations.ListSettlementRefundsDocumentation](../../models/operations/listsettlementrefundsdocumentation.md) | :heavy_minus_sign:                                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                     |
# ListInvoicesLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListInvoicesLinks } from "mollie-api-typescript/models/operations";

let value: ListInvoicesLinks = {
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
| `self`                                                                                       | [operations.ListInvoicesSelf](../../models/operations/listinvoicesself.md)                   | :heavy_minus_sign:                                                                           | The URL to the current set of items.                                                         |
| `previous`                                                                                   | [operations.ListInvoicesPrevious](../../models/operations/listinvoicesprevious.md)           | :heavy_minus_sign:                                                                           | The previous set of items, if available.                                                     |
| `next`                                                                                       | [operations.ListInvoicesNext](../../models/operations/listinvoicesnext.md)                   | :heavy_minus_sign:                                                                           | The next set of items, if available.                                                         |
| `documentation`                                                                              | [operations.ListInvoicesDocumentation](../../models/operations/listinvoicesdocumentation.md) | :heavy_minus_sign:                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.   |
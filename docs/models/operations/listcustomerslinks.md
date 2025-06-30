# ListCustomersLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListCustomersLinks } from "mollie-api-typescript/models/operations";

let value: ListCustomersLinks = {
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `self`                                                                                         | [operations.ListCustomersSelf](../../models/operations/listcustomersself.md)                   | :heavy_minus_sign:                                                                             | The URL to the current set of items.                                                           |
| `previous`                                                                                     | [operations.ListCustomersPrevious](../../models/operations/listcustomersprevious.md)           | :heavy_minus_sign:                                                                             | The previous set of items, if available.                                                       |
| `next`                                                                                         | [operations.ListCustomersNext](../../models/operations/listcustomersnext.md)                   | :heavy_minus_sign:                                                                             | The next set of items, if available.                                                           |
| `documentation`                                                                                | [operations.ListCustomersDocumentation](../../models/operations/listcustomersdocumentation.md) | :heavy_minus_sign:                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.     |
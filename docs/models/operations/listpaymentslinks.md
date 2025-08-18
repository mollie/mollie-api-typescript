# ListPaymentsLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListPaymentsLinks } from "mollie-api-typescript/models/operations";

let value: ListPaymentsLinks = {
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
| `self`                                                                                       | [operations.ListPaymentsSelf](../../models/operations/listpaymentsself.md)                   | :heavy_check_mark:                                                                           | The URL to the current set of items.                                                         |
| `previous`                                                                                   | [operations.ListPaymentsPrevious](../../models/operations/listpaymentsprevious.md)           | :heavy_check_mark:                                                                           | The previous set of items, if available.                                                     |
| `next`                                                                                       | [operations.ListPaymentsNext](../../models/operations/listpaymentsnext.md)                   | :heavy_check_mark:                                                                           | The next set of items, if available.                                                         |
| `documentation`                                                                              | [operations.ListPaymentsDocumentation](../../models/operations/listpaymentsdocumentation.md) | :heavy_check_mark:                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.   |
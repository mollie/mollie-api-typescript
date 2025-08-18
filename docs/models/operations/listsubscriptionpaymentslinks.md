# ListSubscriptionPaymentsLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListSubscriptionPaymentsLinks } from "mollie-api-typescript/models/operations";

let value: ListSubscriptionPaymentsLinks = {
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                               | [operations.ListSubscriptionPaymentsSelf](../../models/operations/listsubscriptionpaymentsself.md)                   | :heavy_check_mark:                                                                                                   | The URL to the current set of items.                                                                                 |
| `previous`                                                                                                           | [operations.ListSubscriptionPaymentsPrevious](../../models/operations/listsubscriptionpaymentsprevious.md)           | :heavy_check_mark:                                                                                                   | The previous set of items, if available.                                                                             |
| `next`                                                                                                               | [operations.ListSubscriptionPaymentsNext](../../models/operations/listsubscriptionpaymentsnext.md)                   | :heavy_check_mark:                                                                                                   | The next set of items, if available.                                                                                 |
| `documentation`                                                                                                      | [operations.ListSubscriptionPaymentsDocumentation](../../models/operations/listsubscriptionpaymentsdocumentation.md) | :heavy_check_mark:                                                                                                   | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                           |
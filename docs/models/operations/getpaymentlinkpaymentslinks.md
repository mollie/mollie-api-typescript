# GetPaymentLinkPaymentsLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetPaymentLinkPaymentsLinks } from "mollie-api-typescript/models/operations";

let value: GetPaymentLinkPaymentsLinks = {
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
| `self`                                                                                                           | [operations.GetPaymentLinkPaymentsSelf](../../models/operations/getpaymentlinkpaymentsself.md)                   | :heavy_check_mark:                                                                                               | The URL to the current set of items.                                                                             |
| `previous`                                                                                                       | [operations.GetPaymentLinkPaymentsPrevious](../../models/operations/getpaymentlinkpaymentsprevious.md)           | :heavy_check_mark:                                                                                               | The previous set of items, if available.                                                                         |
| `next`                                                                                                           | [operations.GetPaymentLinkPaymentsNext](../../models/operations/getpaymentlinkpaymentsnext.md)                   | :heavy_check_mark:                                                                                               | The next set of items, if available.                                                                             |
| `documentation`                                                                                                  | [operations.GetPaymentLinkPaymentsDocumentation](../../models/operations/getpaymentlinkpaymentsdocumentation.md) | :heavy_check_mark:                                                                                               | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                       |
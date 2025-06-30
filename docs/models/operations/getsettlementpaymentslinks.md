# GetSettlementPaymentsLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetSettlementPaymentsLinks } from "mollie-api-typescript/models/operations";

let value: GetSettlementPaymentsLinks = {
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                         | [operations.GetSettlementPaymentsSelf](../../models/operations/getsettlementpaymentsself.md)                   | :heavy_minus_sign:                                                                                             | The URL to the current set of items.                                                                           |
| `previous`                                                                                                     | [operations.GetSettlementPaymentsPrevious](../../models/operations/getsettlementpaymentsprevious.md)           | :heavy_minus_sign:                                                                                             | The previous set of items, if available.                                                                       |
| `next`                                                                                                         | [operations.GetSettlementPaymentsNext](../../models/operations/getsettlementpaymentsnext.md)                   | :heavy_minus_sign:                                                                                             | The next set of items, if available.                                                                           |
| `documentation`                                                                                                | [operations.GetSettlementPaymentsDocumentation](../../models/operations/getsettlementpaymentsdocumentation.md) | :heavy_minus_sign:                                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                     |
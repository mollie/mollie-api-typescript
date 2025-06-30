# GetSettlementLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetSettlementLinks } from "mollie-api-typescript/models/operations";

let value: GetSettlementLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  payments: {
    href: "https://...",
    type: "application/hal+json",
  },
  captures: {
    href: "https://...",
    type: "application/hal+json",
  },
  refunds: {
    href: "https://...",
    type: "application/hal+json",
  },
  chargebacks: {
    href: "https://...",
    type: "application/hal+json",
  },
  invoice: {
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
| `self`                                                                                         | [operations.GetSettlementSelf](../../models/operations/getsettlementself.md)                   | :heavy_minus_sign:                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.     |
| `payments`                                                                                     | [operations.GetSettlementPayments](../../models/operations/getsettlementpayments.md)           | :heavy_minus_sign:                                                                             | The API resource URL of the [payments](list-payments) included in this settlement.             |
| `captures`                                                                                     | [operations.GetSettlementCaptures](../../models/operations/getsettlementcaptures.md)           | :heavy_minus_sign:                                                                             | The API resource URL of the [captures](list-captures) included in this settlement.             |
| `refunds`                                                                                      | [operations.GetSettlementRefunds](../../models/operations/getsettlementrefunds.md)             | :heavy_minus_sign:                                                                             | The API resource URL of the [refunds](list-refunds) deducted from this settlement.             |
| `chargebacks`                                                                                  | [operations.GetSettlementChargebacks](../../models/operations/getsettlementchargebacks.md)     | :heavy_minus_sign:                                                                             | The API resource URL of the [chargebacks](list-chargebacks) deducted from this settlement.     |
| `invoice`                                                                                      | [operations.GetSettlementInvoice](../../models/operations/getsettlementinvoice.md)             | :heavy_minus_sign:                                                                             | The API resource URL of the [invoice](list-invoices).                                          |
| `documentation`                                                                                | [operations.GetSettlementDocumentation](../../models/operations/getsettlementdocumentation.md) | :heavy_minus_sign:                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.     |
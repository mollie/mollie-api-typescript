# SettlementLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { SettlementLinks } from "mollie-api-typescript/models/operations";

let value: SettlementLinks = {
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
| `self`                                                                                         | [operations.SettlementSelf](../../models/operations/settlementself.md)                         | :heavy_minus_sign:                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.     |
| `payments`                                                                                     | [operations.ListSettlementsPayments](../../models/operations/listsettlementspayments.md)       | :heavy_minus_sign:                                                                             | The API resource URL of the [payments](list-payments) included in this settlement.             |
| `captures`                                                                                     | [operations.ListSettlementsCaptures](../../models/operations/listsettlementscaptures.md)       | :heavy_minus_sign:                                                                             | The API resource URL of the [captures](list-captures) included in this settlement.             |
| `refunds`                                                                                      | [operations.ListSettlementsRefunds](../../models/operations/listsettlementsrefunds.md)         | :heavy_minus_sign:                                                                             | The API resource URL of the [refunds](list-refunds) deducted from this settlement.             |
| `chargebacks`                                                                                  | [operations.ListSettlementsChargebacks](../../models/operations/listsettlementschargebacks.md) | :heavy_minus_sign:                                                                             | The API resource URL of the [chargebacks](list-chargebacks) deducted from this settlement.     |
| `invoice`                                                                                      | [operations.ListSettlementsInvoice](../../models/operations/listsettlementsinvoice.md)         | :heavy_minus_sign:                                                                             | The API resource URL of the [invoice](list-invoices).                                          |
| `documentation`                                                                                | [operations.SettlementDocumentation](../../models/operations/settlementdocumentation.md)       | :heavy_minus_sign:                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.     |
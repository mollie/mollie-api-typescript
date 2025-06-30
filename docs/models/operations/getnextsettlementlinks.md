# GetNextSettlementLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetNextSettlementLinks } from "mollie-api-typescript/models/operations";

let value: GetNextSettlementLinks = {
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `self`                                                                                                 | [operations.GetNextSettlementSelf](../../models/operations/getnextsettlementself.md)                   | :heavy_minus_sign:                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.             |
| `payments`                                                                                             | [operations.GetNextSettlementPayments](../../models/operations/getnextsettlementpayments.md)           | :heavy_minus_sign:                                                                                     | The API resource URL of the [payments](list-payments) included in this settlement.                     |
| `captures`                                                                                             | [operations.GetNextSettlementCaptures](../../models/operations/getnextsettlementcaptures.md)           | :heavy_minus_sign:                                                                                     | The API resource URL of the [captures](list-captures) included in this settlement.                     |
| `refunds`                                                                                              | [operations.GetNextSettlementRefunds](../../models/operations/getnextsettlementrefunds.md)             | :heavy_minus_sign:                                                                                     | The API resource URL of the [refunds](list-refunds) deducted from this settlement.                     |
| `chargebacks`                                                                                          | [operations.GetNextSettlementChargebacks](../../models/operations/getnextsettlementchargebacks.md)     | :heavy_minus_sign:                                                                                     | The API resource URL of the [chargebacks](list-chargebacks) deducted from this settlement.             |
| `invoice`                                                                                              | [operations.GetNextSettlementInvoice](../../models/operations/getnextsettlementinvoice.md)             | :heavy_minus_sign:                                                                                     | The API resource URL of the [invoice](list-invoices).                                                  |
| `documentation`                                                                                        | [operations.GetNextSettlementDocumentation](../../models/operations/getnextsettlementdocumentation.md) | :heavy_minus_sign:                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.             |
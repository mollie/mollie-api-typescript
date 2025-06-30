# GetOpenSettlementLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetOpenSettlementLinks } from "mollie-api-typescript/models/operations";

let value: GetOpenSettlementLinks = {
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
| `self`                                                                                                 | [operations.GetOpenSettlementSelf](../../models/operations/getopensettlementself.md)                   | :heavy_minus_sign:                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.             |
| `payments`                                                                                             | [operations.GetOpenSettlementPayments](../../models/operations/getopensettlementpayments.md)           | :heavy_minus_sign:                                                                                     | The API resource URL of the [payments](list-payments) included in this settlement.                     |
| `captures`                                                                                             | [operations.GetOpenSettlementCaptures](../../models/operations/getopensettlementcaptures.md)           | :heavy_minus_sign:                                                                                     | The API resource URL of the [captures](list-captures) included in this settlement.                     |
| `refunds`                                                                                              | [operations.GetOpenSettlementRefunds](../../models/operations/getopensettlementrefunds.md)             | :heavy_minus_sign:                                                                                     | The API resource URL of the [refunds](list-refunds) deducted from this settlement.                     |
| `chargebacks`                                                                                          | [operations.GetOpenSettlementChargebacks](../../models/operations/getopensettlementchargebacks.md)     | :heavy_minus_sign:                                                                                     | The API resource URL of the [chargebacks](list-chargebacks) deducted from this settlement.             |
| `invoice`                                                                                              | [operations.GetOpenSettlementInvoice](../../models/operations/getopensettlementinvoice.md)             | :heavy_minus_sign:                                                                                     | The API resource URL of the [invoice](list-invoices).                                                  |
| `documentation`                                                                                        | [operations.GetOpenSettlementDocumentation](../../models/operations/getopensettlementdocumentation.md) | :heavy_minus_sign:                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.             |
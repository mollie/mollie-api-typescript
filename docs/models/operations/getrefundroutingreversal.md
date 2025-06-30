# GetRefundRoutingReversal

## Example Usage

```typescript
import { GetRefundRoutingReversal } from "mollie-api-typescript/models/operations";

let value: GetRefundRoutingReversal = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  source: {
    organizationId: "org_1234567",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                               | [operations.GetRefundRoutingReversalAmount](../../models/operations/getrefundroutingreversalamount.md) | :heavy_minus_sign:                                                                                     | The amount that will be pulled back.                                                                   |
| `source`                                                                                               | [operations.GetRefundSource](../../models/operations/getrefundsource.md)                               | :heavy_minus_sign:                                                                                     | Where the funds will be pulled back from.                                                              |
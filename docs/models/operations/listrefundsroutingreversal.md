# ListRefundsRoutingReversal

## Example Usage

```typescript
import { ListRefundsRoutingReversal } from "mollie-api-typescript/models/operations";

let value: ListRefundsRoutingReversal = {
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                   | [operations.ListRefundsRoutingReversalAmount](../../models/operations/listrefundsroutingreversalamount.md) | :heavy_minus_sign:                                                                                         | The amount that will be pulled back.                                                                       |
| `source`                                                                                                   | [operations.ListRefundsSource](../../models/operations/listrefundssource.md)                               | :heavy_minus_sign:                                                                                         | Where the funds will be pulled back from.                                                                  |
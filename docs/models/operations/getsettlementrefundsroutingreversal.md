# GetSettlementRefundsRoutingReversal

## Example Usage

```typescript
import { GetSettlementRefundsRoutingReversal } from "mollie-api-typescript/models/operations";

let value: GetSettlementRefundsRoutingReversal = {
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                     | [operations.GetSettlementRefundsRoutingReversalAmount](../../models/operations/getsettlementrefundsroutingreversalamount.md) | :heavy_minus_sign:                                                                                                           | The amount that will be pulled back.                                                                                         |
| `source`                                                                                                                     | [operations.GetSettlementRefundsSource](../../models/operations/getsettlementrefundssource.md)                               | :heavy_minus_sign:                                                                                                           | Where the funds will be pulled back from.                                                                                    |
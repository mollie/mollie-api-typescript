# ListSettlementRefundsRoutingReversal

## Example Usage

```typescript
import { ListSettlementRefundsRoutingReversal } from "mollie-api-typescript/models/operations";

let value: ListSettlementRefundsRoutingReversal = {
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                                                       | [operations.ListSettlementRefundsRoutingReversalAmount](../../models/operations/listsettlementrefundsroutingreversalamount.md) | :heavy_minus_sign:                                                                                                             | The amount that will be pulled back.                                                                                           |
| `source`                                                                                                                       | [operations.ListSettlementRefundsSource](../../models/operations/listsettlementrefundssource.md)                               | :heavy_minus_sign:                                                                                                             | Where the funds will be pulled back from.                                                                                      |
# ListAllRefundsRoutingReversal

## Example Usage

```typescript
import { ListAllRefundsRoutingReversal } from "mollie-api-typescript/models/operations";

let value: ListAllRefundsRoutingReversal = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                         | [operations.ListAllRefundsRoutingReversalAmount](../../models/operations/listallrefundsroutingreversalamount.md) | :heavy_minus_sign:                                                                                               | The amount that will be pulled back.                                                                             |
| `source`                                                                                                         | [operations.ListAllRefundsSource](../../models/operations/listallrefundssource.md)                               | :heavy_minus_sign:                                                                                               | Where the funds will be pulled back from.                                                                        |
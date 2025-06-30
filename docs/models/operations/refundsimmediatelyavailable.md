# RefundsImmediatelyAvailable

## Example Usage

```typescript
import { RefundsImmediatelyAvailable } from "mollie-api-typescript/models/operations";

let value: RefundsImmediatelyAvailable = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  subtotals: null,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                             | [operations.RefundsImmediatelyAvailableAmount](../../models/operations/refundsimmediatelyavailableamount.md)         | :heavy_minus_sign:                                                                                                   | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                    |
| `subtotals`                                                                                                          | [operations.RefundsImmediatelyAvailableSubtotal2](../../models/operations/refundsimmediatelyavailablesubtotal2.md)[] | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
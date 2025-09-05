# SubGroup

## Example Usage

```typescript
import { SubGroup } from "mollie-api-typescript/models";

let value: SubGroup = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  subtotals: null,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `amount`                                                                                          | [models.Amount](../models/amount.md)                                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
| `subtotals`                                                                                       | [models.ComponentsSubTotals](../models/componentssubtotals.md)[]                                  | :heavy_minus_sign:                                                                                | N/A                                                                                               |
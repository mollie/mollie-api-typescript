# DeductionDetails

A detailed breakdown of the deductions withheld from the movement. Each field represents a specific type of
deduction applied to the transaction. Only the applicable fields will be present.

## Example Usage

```typescript
import { DeductionDetails } from "mollie-api-typescript/models";

let value: DeductionDetails = {
  fees: {
    currency: "EUR",
    value: "10.00",
  },
  commissions: {
    currency: "EUR",
    value: "10.00",
  },
  repayments: {
    currency: "EUR",
    value: "10.00",
  },
  reservations: {
    currency: "EUR",
    value: "10.00",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `fees`                                                                                            | [models.AmountNullable](../models/amountnullable.md)                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
| `commissions`                                                                                     | [models.AmountNullable](../models/amountnullable.md)                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
| `repayments`                                                                                      | [models.AmountNullable](../models/amountnullable.md)                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
| `reservations`                                                                                    | [models.AmountNullable](../models/amountnullable.md)                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
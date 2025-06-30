# CorrectionsImmediatelyAvailable

## Example Usage

```typescript
import { CorrectionsImmediatelyAvailable } from "mollie-api-typescript/models/operations";

let value: CorrectionsImmediatelyAvailable = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
  subtotals: null,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                     | [operations.CorrectionsImmediatelyAvailableAmount](../../models/operations/correctionsimmediatelyavailableamount.md)         | :heavy_minus_sign:                                                                                                           | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field.                            |
| `subtotals`                                                                                                                  | [operations.CorrectionsImmediatelyAvailableSubtotal2](../../models/operations/correctionsimmediatelyavailablesubtotal2.md)[] | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
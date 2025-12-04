# ListEntitySettlementRate

The service rates, further divided into `fixed` and `percentage` costs.

## Example Usage

```typescript
import { ListEntitySettlementRate } from "mollie-api-typescript/models";

let value: ListEntitySettlementRate = {
  fixed: {
    currency: "EUR",
    value: "10.00",
  },
  percentage: "2.5",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `fixed`                                                                                           | [models.Amount](../models/amount.md)                                                              | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |
| `percentage`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               | 2.5                                                                                               |
# GetOpenSettlementRate

The service rates, further divided into `fixed` and `percentage` costs.

## Example Usage

```typescript
import { GetOpenSettlementRate } from "mollie-api-typescript/models/operations";

let value: GetOpenSettlementRate = {
  fixed: {
    currency: "EUR",
    value: "10.00",
  },
  percentage: {
    currency: "EUR",
    value: "10.00",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `fixed`                                                                                           | [operations.GetOpenSettlementFixed](../../models/operations/getopensettlementfixed.md)            | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
| `percentage`                                                                                      | [operations.GetOpenSettlementPercentage](../../models/operations/getopensettlementpercentage.md)  | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
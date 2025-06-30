# GetNextSettlementRate

The service rates, further divided into `fixed` and `percentage` costs.

## Example Usage

```typescript
import { GetNextSettlementRate } from "mollie-api-typescript/models/operations";

let value: GetNextSettlementRate = {
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
| `fixed`                                                                                           | [operations.GetNextSettlementFixed](../../models/operations/getnextsettlementfixed.md)            | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
| `percentage`                                                                                      | [operations.GetNextSettlementPercentage](../../models/operations/getnextsettlementpercentage.md)  | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
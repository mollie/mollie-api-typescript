# GetSettlementRate

The service rates, further divided into `fixed` and `percentage` costs.

## Example Usage

```typescript
import { GetSettlementRate } from "mollie-api-typescript/models/operations";

let value: GetSettlementRate = {
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
| `fixed`                                                                                           | [operations.GetSettlementFixed](../../models/operations/getsettlementfixed.md)                    | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
| `percentage`                                                                                      | [operations.GetSettlementPercentage](../../models/operations/getsettlementpercentage.md)          | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
# ListSettlementsRate

The service rates, further divided into `fixed` and `percentage` costs.

## Example Usage

```typescript
import { ListSettlementsRate } from "mollie-api-typescript/models/operations";

let value: ListSettlementsRate = {
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
| `fixed`                                                                                           | [operations.ListSettlementsFixed](../../models/operations/listsettlementsfixed.md)                | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
| `percentage`                                                                                      | [operations.ListSettlementsPercentage](../../models/operations/listsettlementspercentage.md)      | :heavy_minus_sign:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |
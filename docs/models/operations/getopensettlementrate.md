# GetOpenSettlementRate

The service rates, further divided into `fixed` and `percentage` costs.

For pass-through fees, which are charged by an external party rather than at an agreed Mollie
rate, both `fixed` and `percentage` are `null`.

## Example Usage

```typescript
import { GetOpenSettlementRate } from "mollie-api-typescript/models/operations";

let value: GetOpenSettlementRate = {
  fixed: null,
  percentage: "2.5",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `fixed`                                                                                           | [models.AmountNullable](../../models/amountnullable.md)                                           | :heavy_check_mark:                                                                                | In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value` field. |                                                                                                   |
| `percentage`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               | 2.5                                                                                               |
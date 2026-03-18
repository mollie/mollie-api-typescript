# ListBalancesEmbedded

## Example Usage

```typescript
import { ListBalancesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListBalancesEmbedded = {
  balances: [],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `balances`                                                                                                                                   | [models.ListEntityBalance](../../models/listentitybalance.md)[]                                                                              | :heavy_check_mark:                                                                                                                           | An array of balance objects. For a complete reference of<br/>the balance object, refer to the [Get balance endpoint](get-balance) documentation. |
# ListBalanceTransactionsEmbedded

## Example Usage

```typescript
import { ListBalanceTransactionsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListBalanceTransactionsEmbedded = {
  balanceTransactions: [],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `balanceTransactions`                                                         | [models.EntityBalanceTransaction](../../models/entitybalancetransaction.md)[] | :heavy_check_mark:                                                            | An array of balance transaction objects.                                      |
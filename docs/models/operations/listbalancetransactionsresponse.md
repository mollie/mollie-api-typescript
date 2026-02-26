# ListBalanceTransactionsResponse

## Example Usage

```typescript
import { ListBalanceTransactionsResponse } from "mollie-api-typescript/models/operations";

let value: ListBalanceTransactionsResponse = {
  result: {
    count: 5,
    embedded: {
      balanceTransactions: [],
    },
    links: {
      self: {
        href: "https://...",
        type: "application/hal+json",
      },
      previous: {
        href: "https://...",
        type: "application/hal+json",
      },
      next: {
        href: "https://...",
        type: "application/hal+json",
      },
      documentation: {
        href: "https://...",
        type: "application/hal+json",
      },
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                         | [operations.ListBalanceTransactionsResponseBody](../../models/operations/listbalancetransactionsresponsebody.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
# ListBusinessAccountTransactionsResponse

## Example Usage

```typescript
import { ListBusinessAccountTransactionsResponse } from "mollie-api-typescript/models/operations";

let value: ListBusinessAccountTransactionsResponse = {
  result: {
    count: 5,
    embedded: {
      transactions: [
        {
          resource: "business-account-transaction",
          id: "batr_87GByBuj4UCcUTEbs6aGJ",
          businessAccountId: "ba_nopqrstuvwxyz23456789A",
          creditDebitIndicator: "debit",
          type: "bank-transfer",
          amount: {
            currency: "EUR",
            value: "10.00",
          },
          description: "Payment for services",
          counterparty: {
            identifier: "NL11ABNA01234567890",
            name: "Beneficiary Name",
          },
          afterBalance: {
            total: {
              currency: "EUR",
              value: "10.00",
            },
          },
          processedAt: "2025-02-26T08:00:00+00:00",
          mode: "live",
          createdAt: "2024-03-20T09:13:37+00:00",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                         | [operations.ListBusinessAccountTransactionsResponseBody](../../models/operations/listbusinessaccounttransactionsresponsebody.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
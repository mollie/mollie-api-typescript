# ListBusinessAccountTransactionsEmbedded

## Example Usage

```typescript
import { ListBusinessAccountTransactionsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListBusinessAccountTransactionsEmbedded = {
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
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `transactions`                                                      | [models.TransactionResponse](../../models/transactionresponse.md)[] | :heavy_minus_sign:                                                  | An array of transaction objects.                                    |
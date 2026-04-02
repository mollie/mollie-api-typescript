# ListBusinessAccountTransactionsResponseBody

A list of transaction objects.

## Example Usage

```typescript
import { ListBusinessAccountTransactionsResponseBody } from "mollie-api-typescript/models/operations";

let value: ListBusinessAccountTransactionsResponseBody = {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListBusinessAccountTransactionsEmbedded](../../models/operations/listbusinessaccounttransactionsembedded.md)                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
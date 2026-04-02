# ListBusinessAccountsResponseBody

A list of business account objects.

## Example Usage

```typescript
import { ListBusinessAccountsResponseBody } from "mollie-api-typescript/models/operations";

let value: ListBusinessAccountsResponseBody = {
  count: 5,
  embedded: {
    businessAccounts: [
      {
        resource: "business-account",
        id: "ba_nopqrstuvwxyz23456789A",
        accountDetails: {
          accountHolderName: "Mollie B.V.",
          name: "Main Checking Account",
          currency: "EUR",
          iban: "NL02MLLE123456780",
          bic: "MLLENL2AXXX",
        },
        balance: {
          total: {
            currency: "EUR",
            value: "10.00",
          },
        },
        status: "active",
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
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListBusinessAccountsEmbedded](../../models/operations/listbusinessaccountsembedded.md)                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
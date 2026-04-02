# ListBusinessAccountsEmbedded

## Example Usage

```typescript
import { ListBusinessAccountsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListBusinessAccountsEmbedded = {
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
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `businessAccounts`                                                          | [models.BusinessAccountResponse](../../models/businessaccountresponse.md)[] | :heavy_minus_sign:                                                          | An array of business account objects.                                       |
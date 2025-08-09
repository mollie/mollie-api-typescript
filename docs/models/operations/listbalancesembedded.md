# ListBalancesEmbedded

## Example Usage

```typescript
import { ListBalancesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListBalancesEmbedded = {
  balances: [
    {
      resource: "balance",
      id: "bal_gVMhHKqSSRYJyPsuoPNFH",
      mode: "live",
      createdAt: "2024-03-20T09:13:37.0Z",
      currency: "EUR",
      description: "Balance description",
      status: "active",
      transferFrequency: "daily",
      transferThreshold: {
        currency: "EUR",
        value: "10.00",
      },
      transferReference: "RF12-3456-7890-1234",
      transferDestination: null,
      availableAmount: {
        currency: "EUR",
        value: "10.00",
      },
      pendingAmount: {
        currency: "EUR",
        value: "10.00",
      },
      links: {
        self: {
          href: "https://...",
          type: "application/hal+json",
        },
        documentation: {
          href: "https://...",
          type: "application/hal+json",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `balances`                                                                                                                                   | [operations.Balance](../../models/operations/balance.md)[]                                                                                   | :heavy_minus_sign:                                                                                                                           | An array of balance objects. For a complete reference of<br/>the balance object, refer to the [Get balance endpoint](get-balance) documentation. |
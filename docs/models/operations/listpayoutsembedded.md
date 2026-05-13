# ListPayoutsEmbedded

## Example Usage

```typescript
import { ListPayoutsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListPayoutsEmbedded = {
  payouts: [
    {
      resource: "payout",
      id: "payout_j8NvRAM2WNZtsykpLEX8J",
      balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
      amount: null,
      description: "My payout description",
      status: "requested",
      statusReason: {
        code: "requested",
        message: "The payout has been requested.",
      },
      createdAt: "2024-03-20T09:13:37+00:00",
      initiatedAt: "2024-03-20T09:13:40+00:00",
      completedAt: "2024-03-20T14:00:00+00:00",
      canceledAt: null,
      mode: "live",
      links: {
        self: {
          href: "https://...",
          type: "application/hal+json",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `payouts`                                                                                                                                | [models.ListEntityPayout](../../models/listentitypayout.md)[]                                                                            | :heavy_check_mark:                                                                                                                       | An array of payout objects. For a complete reference of the payout object, refer to the<br/>[Get payout endpoint](get-payout) documentation. |
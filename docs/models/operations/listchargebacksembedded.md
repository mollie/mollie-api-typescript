# ListChargebacksEmbedded

## Example Usage

```typescript
import { ListChargebacksEmbedded } from "mollie-api-typescript/models/operations";

let value: ListChargebacksEmbedded = {
  chargebacks: [
    {
      resource: "chargeback",
      id: "chb_xFzwUN4ci8HAmSGUACS4J",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      settlementAmount: null,
      reason: {
        code: "AC01",
        description: "Account identifier incorrect (i.e. invalid IBAN)",
      },
      paymentId: "tr_5B8cwPMGnU",
      settlementId: "stl_5B8cwPMGnU",
      createdAt: "2024-03-20T09:13:37.0Z",
      reversedAt: "2024-03-21T09:13:37.0Z",
      links: {
        self: {
          href: "https://...",
          type: "application/hal+json",
        },
        payment: {
          href: "https://...",
          type: "application/hal+json",
        },
        settlement: {
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `chargebacks`                                                                                  | [operations.ListChargebacksChargeback](../../models/operations/listchargebackschargeback.md)[] | :heavy_minus_sign:                                                                             | A list of chargeback objects.                                                                  |
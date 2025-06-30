# ListSettlementsEmbedded

## Example Usage

```typescript
import { ListSettlementsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListSettlementsEmbedded = {
  settlements: [
    {
      id: "stl_5B8cwPMGnU",
      createdAt: "2024-03-20T09:13:37.0Z",
      reference: "07049691.2406.01",
      settledAt: "2025-03-31T12:54:39Z",
      status: "paidout",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
      invoiceId: "inv_aHbjjdrUdm",
      periods: {
        lessThanYearGreaterThan: {
          lessThanMonthGreaterThan: {
            costs: [
              {
                description: "Credit card - Visa debit consumer domestic",
                method: "creditcard",
                count: 10,
                rate: {
                  fixed: {
                    currency: "EUR",
                    value: "10.00",
                  },
                  percentage: {
                    currency: "EUR",
                    value: "10.00",
                  },
                },
                amountNet: {
                  currency: "EUR",
                  value: "10.00",
                },
                amountVat: {
                  currency: "EUR",
                  value: "10.00",
                },
                amountGross: {
                  currency: "EUR",
                  value: "10.00",
                },
              },
            ],
            revenue: [
              {
                description: "Credit card",
                method: "creditcard",
                count: 10,
                amountNet: {
                  currency: "EUR",
                  value: "10.00",
                },
                amountVat: {
                  currency: "EUR",
                  value: "10.00",
                },
                amountGross: {
                  currency: "EUR",
                  value: "10.00",
                },
              },
            ],
            invoiceId: "inv_aHbjjdrUdm",
            invoiceReference: "MOLR2021.0001399669",
          },
        },
      },
      links: {
        self: {
          href: "https://...",
          type: "application/hal+json",
        },
        payments: {
          href: "https://...",
          type: "application/hal+json",
        },
        captures: {
          href: "https://...",
          type: "application/hal+json",
        },
        refunds: {
          href: "https://...",
          type: "application/hal+json",
        },
        chargebacks: {
          href: "https://...",
          type: "application/hal+json",
        },
        invoice: {
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

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `settlements`                                                                                                                                            | [operations.ListSettlementsSettlement](../../models/operations/listsettlementssettlement.md)[]                                                           | :heavy_minus_sign:                                                                                                                                       | An array of settlement objects. For a complete reference of the settlement object, refer to the [Get settlement endpoint](get-settlement) documentation. |
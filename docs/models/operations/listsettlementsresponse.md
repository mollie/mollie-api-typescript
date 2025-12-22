# ListSettlementsResponse

A list of settlement objects. For a complete reference of the settlement
object, refer to the [Get settlement endpoint](get-settlement) documentation.

## Example Usage

```typescript
import { ListSettlementsResponse } from "mollie-api-typescript/models/operations";

let value: ListSettlementsResponse = {
  count: 5,
  embedded: {
    settlements: [
      {
        resource: "settlement",
        id: "stl_5B8cwPMGnU",
        createdAt: "2024-03-20T09:13:37+00:00",
        reference: "07049691.2406.01",
        settledAt: "2025-03-31T12:54:39+00:00",
        status: "paidout",
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        balanceId: "bal_gVMhHKqSSRYJyPsuoPNFH",
        invoiceId: "inv_aHbjjdrUdm",
        periods: {
          "key": {
            "key": {
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
                    percentage: "2.5",
                  },
                  amountNet: {
                    currency: "EUR",
                    value: "10.00",
                  },
                  amountVat: null,
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
          "key1": {},
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
          invoice: null,
        },
      },
    ],
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListSettlementsEmbedded](../../models/operations/listsettlementsembedded.md)                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
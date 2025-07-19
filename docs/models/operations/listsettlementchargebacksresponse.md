# ListSettlementChargebacksResponse

A list of chargeback objects.

## Example Usage

```typescript
import { ListSettlementChargebacksResponse } from "mollie-api-typescript/models/operations";

let value: ListSettlementChargebacksResponse = {
  count: 5,
  embedded: {
    chargebacks: [
      {
        resource: "chargeback",
        id: "chb_xFzwUN4ci8HAmSGUACS4J",
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        settlementAmount: {
          currency: "EUR",
          value: "10.00",
        },
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
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListSettlementChargebacksEmbedded](../../models/operations/listsettlementchargebacksembedded.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.ListSettlementChargebacksLinks](../../models/operations/listsettlementchargebackslinks.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
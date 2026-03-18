# ListChargebacksResponse

## Example Usage

```typescript
import { ListChargebacksResponse } from "mollie-api-typescript/models/operations";

let value: ListChargebacksResponse = {
  result: {
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
          createdAt: "2024-03-20T09:13:37+00:00",
          reversedAt: "2024-03-21T09:13:37+00:00",
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
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [operations.ListChargebacksResponseBody](../../models/operations/listchargebacksresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
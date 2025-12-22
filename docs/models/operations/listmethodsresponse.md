# ListMethodsResponse

A list of payment method objects. For a complete reference of the
payment method object, refer to the [Get payment method endpoint](get-method) documentation.

## Example Usage

```typescript
import { ListMethodsResponse } from "mollie-api-typescript/models/operations";

let value: ListMethodsResponse = {
  count: 5,
  embedded: {
    methods: [
      {
        resource: "method",
        id: "ideal",
        description: "iDeal",
        minimumAmount: {
          currency: "EUR",
          value: "10.00",
        },
        maximumAmount: {
          currency: "EUR",
          value: "10.00",
        },
        image: {
          size1x: "https://...",
          size2x: "https://...",
          svg: "https://...",
        },
        status: "activated",
        issuers: [
          {
            resource: "issuer",
            id: "ideal_ABNANL2A",
            name: "ING Bank",
            image: {
              size1x: "https://...",
              size2x: "https://...",
              svg: "https://...",
            },
          },
        ],
        links: {
          self: {
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
    documentation: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `count`                                                                                 | *number*                                                                                | :heavy_check_mark:                                                                      | The number of payment method objects in this result set.<br/>Results are **not** paginated. | 5                                                                                       |
| `embedded`                                                                              | [operations.ListMethodsEmbedded](../../models/operations/listmethodsembedded.md)        | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
| `links`                                                                                 | [operations.ListMethodsLinks](../../models/operations/listmethodslinks.md)              | :heavy_check_mark:                                                                      | N/A                                                                                     |                                                                                         |
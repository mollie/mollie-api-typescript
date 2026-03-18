# ListAllMethodsEmbedded

## Example Usage

```typescript
import { ListAllMethodsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListAllMethodsEmbedded = {
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
      pricing: [
        {
          description: "The Netherlands",
          fixed: {
            currency: "EUR",
            value: "10.00",
          },
          variable: "0",
          feeRegion: "other",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `methods`                                                                                                                                                        | [models.ListEntityMethodAll](../../models/listentitymethodall.md)[]                                                                                              | :heavy_check_mark:                                                                                                                                               | An array of payment method objects. For a complete<br/>reference of the payment method object, refer to the [Get payment method endpoint](get-method)<br/>documentation. |
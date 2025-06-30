# ListOrderRefundsEmbedded

## Example Usage

```typescript
import { ListOrderRefundsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListOrderRefundsEmbedded = {
  refunds: [
    {
      id: "re_5B8cwPMGnU",
      mode: "live",
      description: "Refunding a Chess Board",
      amount: {
        currency: "EUR",
        value: "10.00",
      },
      settlementAmount: {
        currency: "EUR",
        value: "10.00",
      },
      orderId: "ord_5B8cwPMGnU",
      settlementId: "stl_5B8cwPMGnU",
      status: "queued",
      createdAt: "2024-03-20T09:13:37.0Z",
      externalReference: {
        type: "acquirer-reference",
        id: "123456789012345",
      },
      lines: [
        {
          id: "odl_5B8cwPMGnU",
          orderId: "ord_5B8cwPMGnU",
          name: "Chess Board",
          sku: "5702016116977",
          type: "physical",
          status: "created",
          isCancelable: false,
          quantity: 1,
          quantityShipped: 0,
          amountShipped: {
            currency: "EUR",
            value: "10.00",
          },
          quantityRefunded: 0,
          amountRefunded: {
            currency: "EUR",
            value: "10.00",
          },
          quantityCanceled: 0,
          amountCanceled: {
            currency: "EUR",
            value: "10.00",
          },
          shippableQuantity: 0,
          refundableQuantity: 0,
          cancelableQuantity: 0,
          unitPrice: {
            currency: "EUR",
            value: "10.00",
          },
          totalAmount: {
            currency: "EUR",
            value: "10.00",
          },
          vatRate: "21.00",
          vatAmount: {
            currency: "EUR",
            value: "10.00",
          },
          createdAt: "2025-03-28T16:42:12+00:00",
          discountedAmount: {
            currency: "EUR",
            value: "10.00",
          },
        },
      ],
      links: {
        self: {
          href: "https://...",
          type: "application/hal+json",
        },
        order: {
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `refunds`                                                                                | [operations.ListOrderRefundsRefund](../../models/operations/listorderrefundsrefund.md)[] | :heavy_minus_sign:                                                                       | An array of refund objects.                                                              |
# ListConnectBalanceTransfersResponse

A list of Connect balance transfers. For a complete reference of the Connect balance transfer
object, refer to the [Get balance transfer endpoint](get-balance-transfer) documentation.

## Example Usage

```typescript
import { ListConnectBalanceTransfersResponse } from "mollie-api-typescript/models/operations";

let value: ListConnectBalanceTransfersResponse = {
  count: 5,
  embedded: {
    connectBalanceTransfers: [
      {
        resource: "connect-balance-transfer",
        id: "cbtr_j8NvRAM2WNZtsykpLEX8J",
        amount: {
          currency: "EUR",
          value: "10.00",
        },
        source: {
          type: "organization",
          id: "org_1234567",
          description: "Invoice fee",
        },
        destination: {
          type: "organization",
          id: "org_1234567",
          description: "Invoice fee",
        },
        description: "Invoice fee",
        status: "created",
        statusReason: {
          code: "insufficient_funds",
          message: "Insufficient funds in the source balance.",
        },
        category: "invoice_collection",
        metadata: {
          "order_id": 12345,
          "customer_id": 9876,
        },
        createdAt: "2024-03-20T09:13:37+00:00",
        executedAt: "2024-03-20T09:28:37+00:00",
        mode: "live",
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
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListConnectBalanceTransfersEmbedded](../../models/operations/listconnectbalancetransfersembedded.md)                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
# ListConnectBalanceTransfersResponse

## Example Usage

```typescript
import { ListConnectBalanceTransfersResponse } from "mollie-api-typescript/models/operations";

let value: ListConnectBalanceTransfersResponse = {
  result: {
    count: 5,
    embedded: {
      connectBalanceTransfers: [],
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                 | [operations.ListConnectBalanceTransfersResponseBody](../../models/operations/listconnectbalancetransfersresponsebody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
# ListBalancesResponse

## Example Usage

```typescript
import { ListBalancesResponse } from "mollie-api-typescript/models/operations";

let value: ListBalancesResponse = {
  result: {
    count: 5,
    embedded: {
      balances: [],
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.ListBalancesResponseBody](../../models/operations/listbalancesresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
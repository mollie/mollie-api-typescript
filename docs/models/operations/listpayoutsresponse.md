# ListPayoutsResponse

## Example Usage

```typescript
import { ListPayoutsResponse } from "mollie-api-typescript/models/operations";

let value: ListPayoutsResponse = {
  result: {
    count: 5,
    embedded: {
      payouts: [],
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.ListPayoutsResponseBody](../../models/operations/listpayoutsresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
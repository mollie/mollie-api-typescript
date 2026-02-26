# ListInvoicesResponse

## Example Usage

```typescript
import { ListInvoicesResponse } from "mollie-api-typescript/models/operations";

let value: ListInvoicesResponse = {
  result: {
    count: 5,
    embedded: {
      invoices: [],
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
| `result`                                                                                   | [operations.ListInvoicesResponseBody](../../models/operations/listinvoicesresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
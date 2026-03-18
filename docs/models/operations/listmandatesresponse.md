# ListMandatesResponse

## Example Usage

```typescript
import { ListMandatesResponse } from "mollie-api-typescript/models/operations";

let value: ListMandatesResponse = {
  result: {
    count: 5,
    embedded: {
      mandates: [],
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
| `result`                                                                                   | [operations.ListMandatesResponseBody](../../models/operations/listmandatesresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
# ListProfilesResponse

## Example Usage

```typescript
import { ListProfilesResponse } from "mollie-api-typescript/models/operations";

let value: ListProfilesResponse = {
  result: {
    count: 5,
    embedded: {
      profiles: [],
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
| `result`                                                                                   | [operations.ListProfilesResponseBody](../../models/operations/listprofilesresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
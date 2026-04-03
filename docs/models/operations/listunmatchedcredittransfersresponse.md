# ListUnmatchedCreditTransfersResponse

## Example Usage

```typescript
import { ListUnmatchedCreditTransfersResponse } from "mollie-api-typescript/models/operations";

let value: ListUnmatchedCreditTransfersResponse = {
  result: {
    count: 5,
    embedded: {
      unmatchedCreditTransfers: [],
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                   | [operations.ListUnmatchedCreditTransfersResponseBody](../../models/operations/listunmatchedcredittransfersresponsebody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
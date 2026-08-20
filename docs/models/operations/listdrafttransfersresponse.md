# ListDraftTransfersResponse

## Example Usage

```typescript
import { ListDraftTransfersResponse } from "mollie-api-typescript/models/operations";

let value: ListDraftTransfersResponse = {
  result: {
    count: 5,
    embedded: {
      draftTransfers: [],
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [operations.ListDraftTransfersResponseBody](../../models/operations/listdrafttransfersresponsebody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
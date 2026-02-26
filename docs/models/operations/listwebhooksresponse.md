# ListWebhooksResponse

## Example Usage

```typescript
import { ListWebhooksResponse } from "mollie-api-typescript/models/operations";

let value: ListWebhooksResponse = {
  result: {
    count: 5,
    embedded: {
      webhooks: [],
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
| `result`                                                                                   | [operations.ListWebhooksResponseBody](../../models/operations/listwebhooksresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
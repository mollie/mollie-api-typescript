# ListCapabilitiesResponse

A list of capabilities.

## Example Usage

```typescript
import { ListCapabilitiesResponse } from "mollie-api-typescript/models/operations";

let value: ListCapabilitiesResponse = {
  count: 2,
  embedded: {
    capabilities: [
      {
        resource: "capability",
        name: "payments",
        status: "pending",
        statusReason: "requirement-past-due",
        requirements: [
          {
            id: "legal-representatives",
            status: "past-due",
            dueDate: "2024-01-01T12:00:00+00:00",
            links: {
              dashboard: {
                href: "https://my.mollie.com/dashboard/...",
                type: "text/html",
              },
            },
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `count`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | The number of items in this result set.                                                    | 2                                                                                          |
| `embedded`                                                                                 | [operations.ListCapabilitiesEmbedded](../../models/operations/listcapabilitiesembedded.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
| `links`                                                                                    | [operations.ListCapabilitiesLinks](../../models/operations/listcapabilitieslinks.md)       | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
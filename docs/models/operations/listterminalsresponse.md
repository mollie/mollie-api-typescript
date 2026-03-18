# ListTerminalsResponse

## Example Usage

```typescript
import { ListTerminalsResponse } from "mollie-api-typescript/models/operations";

let value: ListTerminalsResponse = {
  result: {
    count: 5,
    embedded: {
      terminals: [
        {
          resource: "terminal",
          id: "term_vytxeTZskVKR7C7WgdSP3d",
          mode: "live",
          description: "Main Terminal",
          status: "active",
          brand: "PAX",
          model: "A920",
          serialNumber: "1234567890",
          currency: "EUR",
          profileId: "pfl_5B8cwPMGnU",
          createdAt: "2024-03-20T09:13:37+00:00",
          updatedAt: "2025-03-20T09:13:37+00:00",
          links: {
            self: {
              href: "https://...",
              type: "application/hal+json",
            },
          },
        },
      ],
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.ListTerminalsResponseBody](../../models/operations/listterminalsresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
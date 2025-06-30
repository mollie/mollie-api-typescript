# ListTerminalsEmbedded

## Example Usage

```typescript
import { ListTerminalsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListTerminalsEmbedded = {
  terminals: [
    {
      id: "term_vytxeTZskVKR7C7WgdSP3d",
      mode: "live",
      description: "Main Terminal",
      status: "active",
      brand: "PAX",
      model: "A920",
      serialNumber: "1234567890",
      currency: "EUR",
      profileId: "pfl_5B8cwPMGnU",
      createdAt: "2024-03-20T09:13:37.0Z",
      updatedAt: "2025-03-20T09:13:37.0Z",
      links: {
        self: {
          href: "https://...",
          type: "application/hal+json",
        },
        documentation: {
          href: "https://...",
          type: "application/hal+json",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `terminals`                                                                            | [operations.ListTerminalsTerminal](../../models/operations/listterminalsterminal.md)[] | :heavy_minus_sign:                                                                     | An array of terminal objects.                                                          |
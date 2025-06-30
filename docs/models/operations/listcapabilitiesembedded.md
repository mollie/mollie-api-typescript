# ListCapabilitiesEmbedded

## Example Usage

```typescript
import { ListCapabilitiesEmbedded } from "mollie-api-typescript/models/operations";

let value: ListCapabilitiesEmbedded = {
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `capabilities`                                                   | [operations.Capability](../../models/operations/capability.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
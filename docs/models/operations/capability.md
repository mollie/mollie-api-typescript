# Capability

## Example Usage

```typescript
import { Capability } from "mollie-api-typescript/models/operations";

let value: Capability = {
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `resource`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Always the word `capability` for this resource type.                                               | capability                                                                                         |
| `name`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A unique name for this capability like `payments` / `settlements`.                                 | payments                                                                                           |
| `status`                                                                                           | [operations.ListCapabilitiesStatus](../../models/operations/listcapabilitiesstatus.md)             | :heavy_minus_sign:                                                                                 | N/A                                                                                                | pending                                                                                            |
| `statusReason`                                                                                     | [operations.ListCapabilitiesStatusReason](../../models/operations/listcapabilitiesstatusreason.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                | requirement-past-due                                                                               |
| `requirements`                                                                                     | [operations.ListCapabilitiesRequirement](../../models/operations/listcapabilitiesrequirement.md)[] | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
# GetClientCapabilities

## Example Usage

```typescript
import { GetClientCapabilities } from "mollie-api-typescript/models/operations";

let value: GetClientCapabilities = {
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `resource`                                                                                       | *string*                                                                                         | :heavy_minus_sign:                                                                               | Always the word `capability` for this resource type.                                             | capability                                                                                       |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | A unique name for this capability like `payments` / `settlements`.                               | payments                                                                                         |
| `status`                                                                                         | [operations.GetClientCapabilitiesStatus](../../models/operations/getclientcapabilitiesstatus.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              | pending                                                                                          |
| `statusReason`                                                                                   | [operations.GetClientStatusReason](../../models/operations/getclientstatusreason.md)             | :heavy_minus_sign:                                                                               | N/A                                                                                              | requirement-past-due                                                                             |
| `requirements`                                                                                   | [operations.GetClientRequirement](../../models/operations/getclientrequirement.md)[]             | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |
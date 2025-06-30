# ListClientsCapabilities

## Example Usage

```typescript
import { ListClientsCapabilities } from "mollie-api-typescript/models/operations";

let value: ListClientsCapabilities = {
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `resource`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Always the word `capability` for this resource type.                                     | capability                                                                               |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | A unique name for this capability like `payments` / `settlements`.                       | payments                                                                                 |
| `status`                                                                                 | [operations.ListClientsStatus](../../models/operations/listclientsstatus.md)             | :heavy_minus_sign:                                                                       | N/A                                                                                      | pending                                                                                  |
| `statusReason`                                                                           | [operations.ListClientsStatusReason](../../models/operations/listclientsstatusreason.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      | requirement-past-due                                                                     |
| `requirements`                                                                           | [operations.ListClientsRequirement](../../models/operations/listclientsrequirement.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
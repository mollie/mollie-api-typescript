# ListPermissionsEmbedded

## Example Usage

```typescript
import { ListPermissionsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListPermissionsEmbedded = {
  permissions: [
    {
      resource: "permission",
      id: "payments.read",
      description: "View your payments",
      granted: true,
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

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `permissions`                                                 | [models.EntityPermission](../../models/entitypermission.md)[] | :heavy_minus_sign:                                            | An array of permission objects.                               |
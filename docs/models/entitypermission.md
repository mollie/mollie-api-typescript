# EntityPermission

## Example Usage

```typescript
import { EntityPermission } from "mollie-api-typescript/models";

let value: EntityPermission = {
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
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Indicates the response contains a permission object. Will always contain the string `permission` for this<br/>endpoint. | permission                                                                                                          |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 | payments.read                                                                                                       |
| `description`                                                                                                       | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | A short description of what kind of access the permission enables.                                                  | View your payments                                                                                                  |
| `granted`                                                                                                           | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | Whether this permission is granted to the app by the organization.                                                  | true                                                                                                                |
| `links`                                                                                                             | [models.EntityPermissionLinks](../models/entitypermissionlinks.md)                                                  | :heavy_minus_sign:                                                                                                  | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                   |                                                                                                                     |
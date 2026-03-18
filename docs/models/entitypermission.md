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
| `resource`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Indicates the response contains a permission object. Will always contain the string `permission` for this<br/>endpoint. | permission                                                                                                          |
| `id`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The identifier uniquely referring to this permission. Example: `payments.read`.                                     | payments.read                                                                                                       |
| `description`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A short description of what kind of access the permission enables.                                                  | View your payments                                                                                                  |
| `granted`                                                                                                           | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | Whether this permission is granted to the app by the organization.                                                  | true                                                                                                                |
| `links`                                                                                                             | [models.EntityPermissionLinks](../models/entitypermissionlinks.md)                                                  | :heavy_check_mark:                                                                                                  | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                   |                                                                                                                     |
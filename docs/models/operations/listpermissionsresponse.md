# ListPermissionsResponse

A list of permission objects.

## Example Usage

```typescript
import { ListPermissionsResponse } from "mollie-api-typescript/models/operations";

let value: ListPermissionsResponse = {
  count: 5,
  embedded: {
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
        },
      },
    ],
  },
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

| Field                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListPermissionsEmbedded](../../models/operations/listpermissionsembedded.md)                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.ListPermissionsLinks](../../models/operations/listpermissionslinks.md)                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                        | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                                                                                                                                                                         |                                                                                                                                                                                                                                                                           |
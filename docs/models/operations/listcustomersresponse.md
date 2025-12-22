# ListCustomersResponse

A list of customer objects.

## Example Usage

```typescript
import { ListCustomersResponse } from "mollie-api-typescript/models/operations";

let value: ListCustomersResponse = {
  count: 5,
  embedded: {
    customers: [
      {
        resource: "customer",
        id: "cst_5B8cwPMGnU",
        mode: "live",
        name: "John Doe",
        email: "example@email.com",
        locale: "en_US",
        metadata: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        createdAt: "2024-03-20T09:13:37+00:00",
        links: {
          self: {
            href: "https://...",
            type: "application/hal+json",
          },
          dashboard: {
            href: "https://...",
            type: "application/hal+json",
          },
          payments: {
            href: "https://...",
            type: "application/hal+json",
          },
          mandates: {
            href: "https://...",
            type: "application/hal+json",
          },
          subscriptions: {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListCustomersEmbedded](../../models/operations/listcustomersembedded.md)                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
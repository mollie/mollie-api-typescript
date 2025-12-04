# ListTerminalsResponse

A list of terminal objects.

## Example Usage

```typescript
import { ListTerminalsResponse } from "mollie-api-typescript/models/operations";

let value: ListTerminalsResponse = {
  count: 5,
  embedded: {
    terminals: [
      {
        resource: "terminal",
        id: "term_vytxeTZskVKR7C7WgdSP3d",
        mode: "live",
        description: "Main Terminal",
        status: "active",
        brand: "PAX",
        model: "A920",
        serialNumber: "1234567890",
        currency: "EUR",
        profileId: "pfl_5B8cwPMGnU",
        createdAt: "2024-03-20T09:13:37+00:00",
        updatedAt: "2025-03-20T09:13:37+00:00",
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
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListTerminalsEmbedded](../../models/operations/listterminalsembedded.md)                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
# ListProfilesResponse

A list of profile objects.

## Example Usage

```typescript
import { ListProfilesResponse } from "mollie-api-typescript/models/operations";

let value: ListProfilesResponse = {
  count: 5,
  embedded: {
    profiles: [
      {
        id: "pfl_QkEhN94Ba",
        mode: "live",
        name: "My website name",
        website: "https://example.com",
        email: "test@mollie.com",
        phone: "+31208202070",
        description: "My website description",
        countriesOfActivity: [
          "NL",
          "GB",
        ],
        businessCategory: "OTHER_MERCHANDISE",
        status: "unverified",
        review: {
          status: "pending",
        },
        createdAt: "2022-01-19T12:30:22+00:00",
        links: {
          self: {
            href: "https://...",
            type: "application/hal+json",
          },
          dashboard: {
            href:
              "https://www.mollie.com/dashboard/org_7049691/settings/profiles/pfl_2q3RyuMGry",
            type: "text/html",
          },
          chargebacks: {
            href:
              "https://api.mollie.com/v2/chargebacks?profileId=pfl_2q3RyuMGry",
            type: "application/hal+json",
          },
          methods: {
            href: "https://api.mollie.com/v2/methods?profileId=pfl_2q3RyuMGry",
            type: "application/hal+json",
          },
          payments: {
            href: "https://api.mollie.com/v2/payments?profileId=pfl_2q3RyuMGry",
            type: "application/hal+json",
          },
          refunds: {
            href: "https://api.mollie.com/v2/refunds?profileId=pfl_2q3RyuMGry",
            type: "application/hal+json",
          },
          checkoutPreviewUrl: {
            href: "https://www.mollie.com/checkout/preview/pfl_2q3RyuMGry",
            type: "text/html",
          },
          documentation: {
            href: "https://...",
            type: "text/html",
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
    previous: null,
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
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListProfilesEmbedded](../../models/operations/listprofilesembedded.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [operations.ListProfilesLinks](../../models/operations/listprofileslinks.md)                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
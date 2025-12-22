# ListMandatesResponse

A list of mandate objects.

## Example Usage

```typescript
import { ListMandatesResponse } from "mollie-api-typescript/models/operations";

let value: ListMandatesResponse = {
  count: 5,
  embedded: {
    mandates: [
      {
        resource: "mandate",
        id: "mdt_5B8cwPMGnU",
        mode: "live",
        method: "directdebit",
        details: {
          consumerName: "John Doe",
          consumerAccount: "NL55INGB0000000000",
          consumerBic: "BANKBIC",
          cardHolder: "John Doe",
          cardNumber: "3240",
          cardExpiryDate: "2025-01-01",
          cardLabel: "Visa",
          cardFingerprint: "d3290e932k02f",
        },
        signatureDate: "2025-01-01",
        mandateReference: "ID-1023892",
        status: "valid",
        customerId: "cst_5B8cwPMGnU",
        createdAt: "2024-03-20T09:13:37+00:00",
        links: {
          self: {
            href: "https://...",
            type: "application/hal+json",
          },
          customer: {
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
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListMandatesEmbedded](../../models/operations/listmandatesembedded.md)                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
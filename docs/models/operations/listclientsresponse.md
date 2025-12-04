# ListClientsResponse

A list of client objects. For a complete reference of the client object, refer to the
[Get client endpoint](get-client) documentation.

## Example Usage

```typescript
import { ListClientsResponse } from "mollie-api-typescript/models/operations";

let value: ListClientsResponse = {
  count: 5,
  embedded: {
    clients: [
      {
        resource: "client",
        id: "org_1234567",
        commission: {
          count: 10,
        },
        organizationCreatedAt: "2023-01-15T13:45:30+00:00",
        links: {
          self: {
            href: "https://...",
            type: "application/hal+json",
          },
          organization: {
            href: "https://...",
            type: "application/hal+json",
          },
          onboarding: {
            href: "https://...",
            type: "application/hal+json",
          },
        },
        embedded: {
          organization: {
            resource: "organization",
            id: "org_1234567",
            name: "My Online Store",
            email: "example@mail.com",
            locale: "en_US",
            address: {
              streetAndNumber: "Keizersgracht 126",
              postalCode: "1015 CW",
              city: "Amsterdam",
              country: "NL",
            },
            registrationNumber: "12345678",
            vatNumber: "NL123456789B01",
            vatRegulation: "dutch",
            links: {
              self: {
                href: "https://...",
                type: "application/hal+json",
              },
              dashboard: {
                href: "https://...",
                type: "application/hal+json",
              },
              documentation: {
                href: "https://...",
                type: "application/hal+json",
              },
            },
          },
          onboarding: {
            resource: "onboarding",
            name: "My webshop",
            status: "completed",
            canReceivePayments: true,
            canReceiveSettlements: true,
            signedUpAt: "2023-01-15T13:45:30+00:00",
            links: {
              self: {
                href: "https://...",
                type: "application/hal+json",
              },
              dashboard: {
                href: "https://...",
                type: "application/hal+json",
              },
              organization: {
                href: "https://...",
                type: "application/hal+json",
              },
              documentation: {
                href: "https://...",
                type: "application/hal+json",
              },
            },
          },
          capabilities: {
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
                    href: "https://...",
                    type: "application/hal+json",
                  },
                },
              },
            ],
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
| `count`                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                        | The number of items in this result set. If more items are available, a `_links.next` URL will be present in the result<br/>as well.<br/><br/>The maximum number of items per result set is controlled by the `limit` property provided in the request. The default<br/>limit is 50 items. | 5                                                                                                                                                                                                                                                                         |
| `embedded`                                                                                                                                                                                                                                                                | [operations.ListClientsEmbedded](../../models/operations/listclientsembedded.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                           |
| `links`                                                                                                                                                                                                                                                                   | [models.ListLinks](../../models/listlinks.md)                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                        | Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.                                                                                                                                                            |                                                                                                                                                                                                                                                                           |
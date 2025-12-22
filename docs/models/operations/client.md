# Client

## Example Usage

```typescript
import { Client } from "mollie-api-typescript/models/operations";

let value: Client = {
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
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Indicates the response contains a client object. Will always contain the string `client` for this resource type.     | client                                                                                                               |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The identifier uniquely referring to this client. Example: `org_12345678`.                                           | org_1234567                                                                                                          |
| `commission`                                                                                                         | [operations.ListClientsCommission](../../models/operations/listclientscommission.md)                                 | :heavy_minus_sign:                                                                                                   | The commission object.                                                                                               |                                                                                                                      |
| `organizationCreatedAt`                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The date and time the client organization was created, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)<br/>format. | 2023-01-15T13:45:30+00:00                                                                                            |
| `links`                                                                                                              | [operations.ListClientsLinks](../../models/operations/listclientslinks.md)                                           | :heavy_check_mark:                                                                                                   | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                    |                                                                                                                      |
| `embedded`                                                                                                           | [operations.ClientEmbedded](../../models/operations/clientembedded.md)                                               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
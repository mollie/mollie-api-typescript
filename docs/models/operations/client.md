# Client

## Example Usage

```typescript
import { Client } from "mollie-api-typescript/models/operations";

let value: Client = {
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
    documentation: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
  embedded: {
    organization: {
      locale: "en_US",
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
              href: "https://my.mollie.com/dashboard/...",
              type: "text/html",
            },
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                           | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Indicates the response contains a client object. Will always contain the string `client` for this resource type.     |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The identifier uniquely referring to this client. Example: `org_12345678`.                                           |
| `commission`                                                                                                         | [operations.ListClientsCommission](../../models/operations/listclientscommission.md)                                 | :heavy_minus_sign:                                                                                                   | The commission object.                                                                                               |
| `organizationCreatedAt`                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The date and time the client organization was created, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. |
| `links`                                                                                                              | [operations.ClientLinks](../../models/operations/clientlinks.md)                                                     | :heavy_minus_sign:                                                                                                   | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                    |
| `embedded`                                                                                                           | [operations.ClientEmbedded](../../models/operations/clientembedded.md)                                               | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
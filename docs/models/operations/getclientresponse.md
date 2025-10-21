# GetClientResponse

The client object.

## Example Usage

```typescript
import { GetClientResponse } from "mollie-api-typescript/models/operations";

let value: GetClientResponse = {
  resource: "client",
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
      resource: "organization",
      id: "org_1234567",
      name: "My Online Store",
      email: "example@mail.com",
      locale: "en_US",
      address: {
        streetAndNumber: "<value>",
        postalCode: "03511-2414",
        city: "Port Kaileyville",
        country: "Malta",
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
      signedUpAt: "2023-01-15T13:45:30Z",
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
      requirements: [],
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                           | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Indicates the response contains a client object. Will always contain the string `client` for this resource type.     | client                                                                                                               |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The identifier uniquely referring to this client. Example: `org_12345678`.                                           |                                                                                                                      |
| `commission`                                                                                                         | [operations.GetClientCommission](../../models/operations/getclientcommission.md)                                     | :heavy_minus_sign:                                                                                                   | The commission object.                                                                                               |                                                                                                                      |
| `organizationCreatedAt`                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The date and time the client organization was created, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)<br/>format. |                                                                                                                      |
| `links`                                                                                                              | [operations.GetClientLinks](../../models/operations/getclientlinks.md)                                               | :heavy_minus_sign:                                                                                                   | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                    |                                                                                                                      |
| `embedded`                                                                                                           | [operations.GetClientEmbedded](../../models/operations/getclientembedded.md)                                         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
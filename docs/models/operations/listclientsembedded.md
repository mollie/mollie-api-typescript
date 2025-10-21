# ListClientsEmbedded

## Example Usage

```typescript
import { ListClientsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListClientsEmbedded = {
  clients: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `clients`                                                                                                                                | [operations.Client](../../models/operations/client.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                       | An array of client objects. For a complete reference of the client object, refer to the<br/>[Get client endpoint](get-client) documentation. |
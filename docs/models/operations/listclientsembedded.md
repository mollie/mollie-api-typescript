# ListClientsEmbedded

## Example Usage

```typescript
import { ListClientsEmbedded } from "mollie-api-typescript/models/operations";

let value: ListClientsEmbedded = {
  clients: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `clients`                                                                                                                                | [operations.Client](../../models/operations/client.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                       | An array of client objects. For a complete reference of the client object, refer to the [Get client endpoint](get-client) documentation. |
# GetClientEmbedded

## Example Usage

```typescript
import { GetClientEmbedded } from "mollie-api-typescript/models/operations";

let value: GetClientEmbedded = {
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
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `organization`                                                                                       | [operations.GetClientEmbeddedOrganization](../../models/operations/getclientembeddedorganization.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `onboarding`                                                                                         | [operations.GetClientEmbeddedOnboarding](../../models/operations/getclientembeddedonboarding.md)     | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `capabilities`                                                                                       | [operations.GetClientCapabilities](../../models/operations/getclientcapabilities.md)                 | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
# ClientEmbedded

## Example Usage

```typescript
import { ClientEmbedded } from "mollie-api-typescript/models/operations";

let value: ClientEmbedded = {
  organization: {
    resource: "organization",
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
    resource: "onboarding",
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

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `organization`                                                          | [models.EntityOrganization](../../models/entityorganization.md)         | :heavy_minus_sign:                                                      | N/A                                                                     |
| `onboarding`                                                            | [models.EntityOnboardingStatus](../../models/entityonboardingstatus.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `capabilities`                                                          | [models.EntityCapability](../../models/entitycapability.md)             | :heavy_minus_sign:                                                      | N/A                                                                     |
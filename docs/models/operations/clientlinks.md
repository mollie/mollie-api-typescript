# ClientLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ClientLinks } from "mollie-api-typescript/models/operations";

let value: ClientLinks = {
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
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `self`                                                                                             | [operations.ClientSelf](../../models/operations/clientself.md)                                     | :heavy_minus_sign:                                                                                 | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.         |
| `organization`                                                                                     | [operations.ListClientsLinksOrganization](../../models/operations/listclientslinksorganization.md) | :heavy_minus_sign:                                                                                 | The API resource URL of the client's organization.                                                 |
| `onboarding`                                                                                       | [operations.ListClientsLinksOnboarding](../../models/operations/listclientslinksonboarding.md)     | :heavy_minus_sign:                                                                                 | The API resource URL of the client's onboarding status.                                            |
| `documentation`                                                                                    | [operations.ClientDocumentation](../../models/operations/clientdocumentation.md)                   | :heavy_minus_sign:                                                                                 | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.         |
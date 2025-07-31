# ClientOnboardingLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ClientOnboardingLinks } from "mollie-api-typescript/models/operations";

let value: ClientOnboardingLinks = {
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
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                                   | [operations.ClientOnboardingSelf](../../models/operations/clientonboardingself.md)                                                       | :heavy_minus_sign:                                                                                                                       | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                               |
| `dashboard`                                                                                                                              | [operations.ListClientsOnboardingDashboard](../../models/operations/listclientsonboardingdashboard.md)                                   | :heavy_minus_sign:                                                                                                                       | Direct link to the onboarding process in the Mollie dashboard. The merchant can be redirected to this page to<br/>complete their onboarding. |
| `organization`                                                                                                                           | [operations.ListClientsOnboardingOrganization](../../models/operations/listclientsonboardingorganization.md)                             | :heavy_minus_sign:                                                                                                                       | The API resource URL of the organization.                                                                                                |
| `documentation`                                                                                                                          | [operations.ClientOnboardingDocumentation](../../models/operations/clientonboardingdocumentation.md)                                     | :heavy_minus_sign:                                                                                                                       | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                               |
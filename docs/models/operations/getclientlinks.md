# GetClientLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetClientLinks } from "mollie-api-typescript/models/operations";

let value: GetClientLinks = {
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `self`                                                                                         | [operations.GetClientSelf](../../models/operations/getclientself.md)                           | :heavy_minus_sign:                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.     |
| `organization`                                                                                 | [operations.GetClientLinksOrganization](../../models/operations/getclientlinksorganization.md) | :heavy_minus_sign:                                                                             | The API resource URL of the client's organization.                                             |
| `onboarding`                                                                                   | [operations.GetClientLinksOnboarding](../../models/operations/getclientlinksonboarding.md)     | :heavy_minus_sign:                                                                             | The API resource URL of the client's onboarding status.                                        |
| `documentation`                                                                                | [operations.GetClientDocumentation](../../models/operations/getclientdocumentation.md)         | :heavy_minus_sign:                                                                             | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.     |
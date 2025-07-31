# CreateClientLinkLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { CreateClientLinkLinks } from "mollie-api-typescript/models/operations";

let value: CreateClientLinkLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  clientLink: {
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `self`                                                                                                                               | [operations.CreateClientLinkSelf](../../models/operations/createclientlinkself.md)                                                   | :heavy_minus_sign:                                                                                                                   | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                           |
| `clientLink`                                                                                                                         | [operations.ClientLink](../../models/operations/clientlink.md)                                                                       | :heavy_minus_sign:                                                                                                                   | The link you can send your customer to, where they can either log in and link their account, or sign up and<br/>proceed with onboarding. |
| `documentation`                                                                                                                      | [operations.CreateClientLinkDocumentation](../../models/operations/createclientlinkdocumentation.md)                                 | :heavy_minus_sign:                                                                                                                   | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                           |
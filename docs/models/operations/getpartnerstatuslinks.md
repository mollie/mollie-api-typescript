# GetPartnerStatusLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { GetPartnerStatusLinks } from "mollie-api-typescript/models/operations";

let value: GetPartnerStatusLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  signuplink: {
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

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `self`                                                                                                                                                              | [operations.GetPartnerStatusSelf](../../models/operations/getpartnerstatusself.md)                                                                                  | :heavy_minus_sign:                                                                                                                                                  | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                                          |
| `signuplink`                                                                                                                                                        | [operations.Signuplink](../../models/operations/signuplink.md)                                                                                                      | :heavy_minus_sign:                                                                                                                                                  | The URL that can be used to have new organizations sign up and be automatically linked to this<br/>partner. Will be omitted if the partner is not of type `signuplink`. |
| `documentation`                                                                                                                                                     | [operations.GetPartnerStatusDocumentation](../../models/operations/getpartnerstatusdocumentation.md)                                                                | :heavy_minus_sign:                                                                                                                                                  | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                                                                          |
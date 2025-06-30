# ProfileLinks

An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ProfileLinks } from "mollie-api-typescript/models/operations";

let value: ProfileLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  dashboard: {
    href:
      "https://www.mollie.com/dashboard/org_7049691/settings/profiles/pfl_2q3RyuMGry",
    type: "text/html",
  },
  chargebacks: {
    href: "https://api.mollie.com/v2/chargebacks?profileId=pfl_2q3RyuMGry",
    type: "application/hal+json",
  },
  methods: {
    href: "https://api.mollie.com/v2/methods?profileId=pfl_2q3RyuMGry",
    type: "application/hal+json",
  },
  payments: {
    href: "https://api.mollie.com/v2/payments?profileId=pfl_2q3RyuMGry",
    type: "application/hal+json",
  },
  refunds: {
    href: "https://api.mollie.com/v2/refunds?profileId=pfl_2q3RyuMGry",
    type: "application/hal+json",
  },
  checkoutPreviewUrl: {
    href: "https://www.mollie.com/checkout/preview/pfl_2q3RyuMGry",
    type: "text/html",
  },
  documentation: {
    href: "https://...",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `self`                                                                                                 | [operations.ProfileSelf](../../models/operations/profileself.md)                                       | :heavy_minus_sign:                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.             |
| `dashboard`                                                                                            | [operations.ListProfilesDashboard](../../models/operations/listprofilesdashboard.md)                   | :heavy_minus_sign:                                                                                     | Link to the profile in the Mollie dashboard.                                                           |
| `chargebacks`                                                                                          | [operations.ListProfilesChargebacks](../../models/operations/listprofileschargebacks.md)               | :heavy_minus_sign:                                                                                     | The API resource URL of the chargebacks that belong to this profile.                                   |
| `methods`                                                                                              | [operations.ListProfilesMethods](../../models/operations/listprofilesmethods.md)                       | :heavy_minus_sign:                                                                                     | The API resource URL of the methods that are enabled for this profile.                                 |
| `payments`                                                                                             | [operations.ListProfilesPayments](../../models/operations/listprofilespayments.md)                     | :heavy_minus_sign:                                                                                     | The API resource URL of the payments that belong to this profile.                                      |
| `refunds`                                                                                              | [operations.ListProfilesRefunds](../../models/operations/listprofilesrefunds.md)                       | :heavy_minus_sign:                                                                                     | The API resource URL of the refunds that belong to this profile.                                       |
| `checkoutPreviewUrl`                                                                                   | [operations.ListProfilesCheckoutPreviewUrl](../../models/operations/listprofilescheckoutpreviewurl.md) | :heavy_minus_sign:                                                                                     | The hosted checkout preview URL. You need to be logged in to access this page.                         |
| `documentation`                                                                                        | [operations.ProfileDocumentation](../../models/operations/profiledocumentation.md)                     | :heavy_minus_sign:                                                                                     | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.             |
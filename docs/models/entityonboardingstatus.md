# EntityOnboardingStatus

## Example Usage

```typescript
import { EntityOnboardingStatus } from "mollie-api-typescript/models";

let value: EntityOnboardingStatus = {
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
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `resource`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Indicates the response contains an onboarding status object. Will always contain the string `onboarding` for this<br/>resource type. | onboarding                                                                                                                       |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The name of the organization.                                                                                                    | My webshop                                                                                                                       |
| `status`                                                                                                                         | [models.OnboardingStatus](../models/onboardingstatus.md)                                                                         | :heavy_check_mark:                                                                                                               | The current status of the organization's onboarding process.                                                                     | completed                                                                                                                        |
| `canReceivePayments`                                                                                                             | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | Whether the organization can receive payments.                                                                                   | true                                                                                                                             |
| `canReceiveSettlements`                                                                                                          | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | Whether the organization can receive settlements to their external bank account.                                                 | true                                                                                                                             |
| `signedUpAt`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The sign up date time of the organization in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.                          | 2023-01-15T13:45:30Z                                                                                                             |
| `links`                                                                                                                          | [models.EntityOnboardingStatusLinks](../models/entityonboardingstatuslinks.md)                                                   | :heavy_check_mark:                                                                                                               | An object with several relevant URLs. Every URL object will contain an `href` and a `type` field.                                |                                                                                                                                  |
# ListClientsOnboardingDashboard

Direct link to the onboarding process in the Mollie dashboard. The merchant can be redirected to this page to complete their onboarding.

## Example Usage

```typescript
import { ListClientsOnboardingDashboard } from "mollie-api-typescript/models/operations";

let value: ListClientsOnboardingDashboard = {
  href: "https://...",
  type: "application/hal+json",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `href`                                                      | *string*                                                    | :heavy_check_mark:                                          | The actual URL string.                                      | https://...                                                 |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The content type of the page or endpoint the URL points to. | application/hal+json                                        |
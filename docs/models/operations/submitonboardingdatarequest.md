# SubmitOnboardingDataRequest

## Example Usage

```typescript
import { SubmitOnboardingDataRequest } from "mollie-api-typescript/models/operations";

let value: SubmitOnboardingDataRequest = {
  organization: {
    name: "Mollie B.V.",
    registrationNumber: "30204462",
    vatNumber: "NL815839091B01",
    vatRegulation: "dutch",
  },
  profile: {
    name: "Mollie",
    url: "https://www.mollie.com",
    email: "info@mollie.com",
    phone: "+31208202070",
    description: "Payment service provider",
    businessCategory: "MONEY_SERVICES",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `organization`                                                     | [operations.Organization](../../models/operations/organization.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `profile`                                                          | [operations.Profile](../../models/operations/profile.md)           | :heavy_minus_sign:                                                 | N/A                                                                |
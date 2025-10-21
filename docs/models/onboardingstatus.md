# OnboardingStatus

The current status of the organization's onboarding process.

## Example Usage

```typescript
import { OnboardingStatus } from "mollie-api-typescript/models";

let value: OnboardingStatus = "completed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"needs-data" | "in-review" | "completed" | Unrecognized<string>
```
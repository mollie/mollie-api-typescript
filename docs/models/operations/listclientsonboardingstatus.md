# ListClientsOnboardingStatus

The current status of the organization's onboarding process.

* `needs-data` — The merchant needs to provide additional information
* `in-review` — The merchant provided all information, awaiting review from Mollie
* `completed` — The onboarding is completed

## Example Usage

```typescript
import { ListClientsOnboardingStatus } from "mollie-api-typescript/models/operations";

let value: ListClientsOnboardingStatus = "needs-data";
```

## Values

```typescript
"needs-data" | "in-review" | "completed"
```
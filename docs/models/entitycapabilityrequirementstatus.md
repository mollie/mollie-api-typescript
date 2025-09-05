# EntityCapabilityRequirementStatus

The status of the requirement depends on its due date.
If no due date is given, the status will be `requested`.

## Example Usage

```typescript
import { EntityCapabilityRequirementStatus } from "mollie-api-typescript/models";

let value: EntityCapabilityRequirementStatus = "past-due";
```

## Values

```typescript
"currently-due" | "past-due" | "requested"
```
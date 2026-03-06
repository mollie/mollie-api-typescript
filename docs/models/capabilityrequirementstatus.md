# CapabilityRequirementStatus

The status of the requirement depends on its due date.
If no due date is given, the status will be `requested`.

## Example Usage

```typescript
import { CapabilityRequirementStatus } from "mollie-api-typescript/models";

let value: CapabilityRequirementStatus = "past-due";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"currently-due" | "past-due" | "requested" | Unrecognized<string>
```
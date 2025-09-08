# CapabilityStatusReason

## Example Usage

```typescript
import { CapabilityStatusReason } from "mollie-api-typescript/models";

let value: CapabilityStatusReason = "requirement-past-due";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"requirement-past-due" | "onboarding-information-needed" | Unrecognized<string>
```
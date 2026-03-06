# MethodStatus

The payment method's activation status for this profile.

## Example Usage

```typescript
import { MethodStatus } from "mollie-api-typescript/models";

let value: MethodStatus = "activated";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"activated" | "pending-boarding" | "pending-review" | "pending-external" | "rejected" | Unrecognized<string>
```
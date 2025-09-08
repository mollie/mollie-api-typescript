# MethodStatus

The payment method's activation status for this profile.

## Example Usage

```typescript
import { MethodStatus } from "mollie-api-typescript/models";

let value: MethodStatus = "activated";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"activated" | "pending-boarding" | "pending-review" | "pending-external" | "rejected" | Unrecognized<string>
```
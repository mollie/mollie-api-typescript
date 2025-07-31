# GetMethodStatus

The payment method's activation status for this profile.

## Example Usage

```typescript
import { GetMethodStatus } from "mollie-api-typescript/models/operations";

let value: GetMethodStatus = "activated";
```

## Values

```typescript
"activated" | "pending-boarding" | "pending-review" | "pending-external" | "rejected"
```
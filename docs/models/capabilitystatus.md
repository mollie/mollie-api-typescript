# CapabilityStatus

## Example Usage

```typescript
import { CapabilityStatus } from "mollie-api-typescript/models";

let value: CapabilityStatus = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unrequested" | "enabled" | "disabled" | "pending" | Unrecognized<string>
```
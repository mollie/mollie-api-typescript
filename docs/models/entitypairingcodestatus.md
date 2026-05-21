# EntityPairingCodeStatus

The status of the pairing code.

## Example Usage

```typescript
import { EntityPairingCodeStatus } from "mollie-api-typescript/models";

let value: EntityPairingCodeStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "expired" | "revoked" | Unrecognized<string>
```
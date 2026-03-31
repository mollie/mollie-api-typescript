# SettlementMode

Whether this entity was created in live mode or in test mode. Settlements are always in live mode.

## Example Usage

```typescript
import { SettlementMode } from "mollie-api-typescript/models";

let value: SettlementMode = "live";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"live" | Unrecognized<string>
```
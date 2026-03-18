# EntitySettlementStatus

The status of the settlement.

## Example Usage

```typescript
import { EntitySettlementStatus } from "mollie-api-typescript/models";

let value: EntitySettlementStatus = "paidout";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "pending" | "paidout" | "failed" | Unrecognized<string>
```
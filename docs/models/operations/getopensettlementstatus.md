# GetOpenSettlementStatus

The status of the settlement.

## Example Usage

```typescript
import { GetOpenSettlementStatus } from "mollie-api-typescript/models/operations";

let value: GetOpenSettlementStatus = "paidout";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "pending" | "processing-at-bank" | "paidout" | "failed" | Unrecognized<string>
```
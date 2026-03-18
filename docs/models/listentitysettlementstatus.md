# ListEntitySettlementStatus

The status of the settlement.

## Example Usage

```typescript
import { ListEntitySettlementStatus } from "mollie-api-typescript/models";

let value: ListEntitySettlementStatus = "paidout";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "pending" | "paidout" | "failed" | Unrecognized<string>
```
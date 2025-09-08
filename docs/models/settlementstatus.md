# SettlementStatus

The status of the settlement.

## Example Usage

```typescript
import { SettlementStatus } from "mollie-api-typescript/models";

let value: SettlementStatus = "paidout";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"open" | "pending" | "paidout" | "failed" | Unrecognized<string>
```
# ListEntitySettlementStatus

The status of the settlement.

## Example Usage

```typescript
import { ListEntitySettlementStatus } from "mollie-api-typescript/models";

let value: ListEntitySettlementStatus = "paidout";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"open" | "pending" | "paidout" | "failed" | Unrecognized<string>
```
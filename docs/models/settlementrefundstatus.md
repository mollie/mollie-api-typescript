# SettlementRefundStatus

The refund's status. Settlement refunds always have a status of `refunded`.

## Example Usage

```typescript
import { SettlementRefundStatus } from "mollie-api-typescript/models";

let value: SettlementRefundStatus = "refunded";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"refunded" | Unrecognized<string>
```
# SettlementRefundStatus

The refund's status. Settlement refunds are normally `refunded`, but can be `failed` if the refund
could not be processed.

## Example Usage

```typescript
import { SettlementRefundStatus } from "mollie-api-typescript/models";

let value: SettlementRefundStatus = "refunded";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"refunded" | "failed" | Unrecognized<string>
```
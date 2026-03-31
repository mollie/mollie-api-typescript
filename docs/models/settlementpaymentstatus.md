# SettlementPaymentStatus

The payment's status. Settlement payments always have a status of `paid`.

## Example Usage

```typescript
import { SettlementPaymentStatus } from "mollie-api-typescript/models";

let value: SettlementPaymentStatus = "paid";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"paid" | Unrecognized<string>
```
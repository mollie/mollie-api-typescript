# PayoutStatusReasonCode

A machine-readable code describing the reason for the payout's current status.

## Example Usage

```typescript
import { PayoutStatusReasonCode } from "mollie-api-typescript/models";

let value: PayoutStatusReasonCode = "requested";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"requested" | "initiated" | "processing_at_bank" | "completed" | "canceled" | "failed" | "insufficient_funds" | "returned" | "invalid_request" | "organization_inactive" | "payouts_blocked" | "bank_processing_failed" | "balance_not_found" | "expired" | Unrecognized<string>
```
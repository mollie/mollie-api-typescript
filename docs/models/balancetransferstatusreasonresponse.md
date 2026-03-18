# BalanceTransferStatusReasonResponse

A machine-readable code that indicates the reason for the transfer's status.

## Example Usage

```typescript
import { BalanceTransferStatusReasonResponse } from "mollie-api-typescript/models";

let value: BalanceTransferStatusReasonResponse = "insufficient_funds";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"request_created" | "success" | "source_not_allowed" | "destination_not_allowed" | "insufficient_funds" | "invalid_source_balance" | "invalid_destination_balance" | "transfer_request_expired" | "transfer_limit_reached" | Unrecognized<string>
```
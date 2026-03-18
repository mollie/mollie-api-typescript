# BalanceTransferStatus

The status of the transfer.

## Example Usage

```typescript
import { BalanceTransferStatus } from "mollie-api-typescript/models";

let value: BalanceTransferStatus = "created";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"created" | "failed" | "succeeded" | Unrecognized<string>
```
# BalanceTransferStatus

The status of the transfer.

## Example Usage

```typescript
import { BalanceTransferStatus } from "mollie-api-typescript/models";

let value: BalanceTransferStatus = "created";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created" | "failed" | "succeeded" | Unrecognized<string>
```
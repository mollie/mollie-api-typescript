# TransferStatus

The status of the transfer.

## Example Usage

```typescript
import { TransferStatus } from "mollie-api-typescript/models";

let value: TransferStatus = "initiated";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"requested" | "initiated" | "pending-review" | "processed" | "failed" | "blocked" | "incoming-settled" | Unrecognized<string>
```
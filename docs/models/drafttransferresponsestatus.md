# DraftTransferResponseStatus

The status of the draft transfer.

## Example Usage

```typescript
import { DraftTransferResponseStatus } from "mollie-api-typescript/models";

let value: DraftTransferResponseStatus = "pending-review";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending-review" | "approved" | "declined" | Unrecognized<string>
```
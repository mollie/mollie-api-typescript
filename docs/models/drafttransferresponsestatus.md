# DraftTransferResponseStatus

The status of the draft transfer.

## Example Usage

```typescript
import { DraftTransferResponseStatus } from "mollie-api-typescript/models";

let value: DraftTransferResponseStatus = "awaiting-initiation";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"awaiting-initiation" | "initiated" | "declined" | Unrecognized<string>
```
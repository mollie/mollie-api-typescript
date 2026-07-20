# DraftTransferStatusResponse

The status of the draft transfer.

## Example Usage

```typescript
import { DraftTransferStatusResponse } from "mollie-api-typescript/models";

let value: DraftTransferStatusResponse = "awaiting-initiation";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"awaiting-initiation" | "initiated" | "declined" | Unrecognized<string>
```
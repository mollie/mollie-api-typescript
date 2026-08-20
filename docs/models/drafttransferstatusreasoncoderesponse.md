# DraftTransferStatusReasonCodeResponse

A machine-readable code that indicates the reason for the draft transfer's current status.

## Example Usage

```typescript
import { DraftTransferStatusReasonCodeResponse } from "mollie-api-typescript/models";

let value: DraftTransferStatusReasonCodeResponse = "deleted-by-creator";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"deleted-by-creator" | "declined-by-initiator" | "account-closed" | Unrecognized<string>
```
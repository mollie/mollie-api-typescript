# StatusReasonCodeResponse

A machine-readable code indicating the reason for the transfer's terminal status.

## Example Usage

```typescript
import { StatusReasonCodeResponse } from "mollie-api-typescript/models";

let value: StatusReasonCodeResponse = "insufficient-funds";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"insufficient-funds" | "rejected" | "error" | Unrecognized<string>
```
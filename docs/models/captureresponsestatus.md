# CaptureResponseStatus

The capture's status.

## Example Usage

```typescript
import { CaptureResponseStatus } from "mollie-api-typescript/models";

let value: CaptureResponseStatus = "succeeded";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "succeeded" | "failed" | Unrecognized<string>
```
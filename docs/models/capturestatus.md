# CaptureStatus

The capture's status.

## Example Usage

```typescript
import { CaptureStatus } from "mollie-api-typescript/models";

let value: CaptureStatus = "succeeded";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "succeeded" | "failed" | Unrecognized<string>
```
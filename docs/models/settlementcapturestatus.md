# SettlementCaptureStatus

The capture's status. Settlement captures always have a status of `succeeded`.

## Example Usage

```typescript
import { SettlementCaptureStatus } from "mollie-api-typescript/models";

let value: SettlementCaptureStatus = "succeeded";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"succeeded" | Unrecognized<string>
```
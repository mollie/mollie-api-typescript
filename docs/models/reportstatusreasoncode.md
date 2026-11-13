# ReportStatusReasonCode

A machine-readable code for the failure reason.

## Example Usage

```typescript
import { ReportStatusReasonCode } from "mollie-api-typescript/models";

let value: ReportStatusReasonCode = "generation-failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"generation-failed" | "validation-failed" | "empty-report" | Unrecognized<string>
```
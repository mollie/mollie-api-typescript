# EntityReportStatus

The report's current status.

## Example Usage

```typescript
import { EntityReportStatus } from "mollie-api-typescript/models";

let value: EntityReportStatus = "completed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "completed" | "failed" | Unrecognized<string>
```
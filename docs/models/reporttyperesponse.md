# ReportTypeResponse

The type of report to generate. Determines which other fields the request needs, and which fields show up
on the resulting report.

## Example Usage

```typescript
import { ReportTypeResponse } from "mollie-api-typescript/models";

let value: ReportTypeResponse = "transaction-margin";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"transaction-margin" | Unrecognized<string>
```
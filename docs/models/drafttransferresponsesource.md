# DraftTransferResponseSource

Whether the draft transfer was created via this API, or created in Mollie Apps.

## Example Usage

```typescript
import { DraftTransferResponseSource } from "mollie-api-typescript/models";

let value: DraftTransferResponseSource = "api";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"api" | "mollie-app" | Unrecognized<string>
```
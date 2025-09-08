# TerminalStatus

The status of the terminal.

## Example Usage

```typescript
import { TerminalStatus } from "mollie-api-typescript/models";

let value: TerminalStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "active" | "inactive" | Unrecognized<string>
```
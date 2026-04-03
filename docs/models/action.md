# Action

The action performed on the unmatched credit transfer.

## Example Usage

```typescript
import { Action } from "mollie-api-typescript/models";

let value: Action = "return";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"match" | "return" | Unrecognized<string>
```
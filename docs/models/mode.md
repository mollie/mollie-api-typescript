# Mode

Whether this entity was created in live mode or in test mode.

## Example Usage

```typescript
import { Mode } from "mollie-api-typescript/models";

let value: Mode = "live";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"live" | "test" | Unrecognized<string>
```
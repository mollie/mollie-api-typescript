# Mode

Whether this entity was created in live mode or in test mode.

## Example Usage

```typescript
import { Mode } from "mollie-api-typescript/models";

let value: Mode = "live";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"live" | "test" | Unrecognized<string>
```
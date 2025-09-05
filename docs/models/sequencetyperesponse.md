# SequenceTypeResponse

## Example Usage

```typescript
import { SequenceTypeResponse } from "mollie-api-typescript/models";

let value: SequenceTypeResponse = "oneoff";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"oneoff" | "first" | "recurring" | Unrecognized<string>
```
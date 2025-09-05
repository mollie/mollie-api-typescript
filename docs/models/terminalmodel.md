# TerminalModel

The model of the terminal. For example for a PAX A920, this field's value will be `A920`.

## Example Usage

```typescript
import { TerminalModel } from "mollie-api-typescript/models";

let value: TerminalModel = "A920";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"A35" | "A77" | "A920" | "A920Pro" | "IM30" | "Tap" | Unrecognized<string>
```
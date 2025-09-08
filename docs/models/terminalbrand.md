# TerminalBrand

The brand of the terminal.

## Example Usage

```typescript
import { TerminalBrand } from "mollie-api-typescript/models";

let value: TerminalBrand = "PAX";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PAX" | "Tap" | Unrecognized<string>
```
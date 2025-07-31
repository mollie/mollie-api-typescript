# VatModeRequest

The VAT mode to use for VAT calculation. `exclusive` mode means we will apply the relevant VAT on top of the
price. `inclusive` means the prices you are providing to us already contain the VAT you want to apply.

## Example Usage

```typescript
import { VatModeRequest } from "mollie-api-typescript/models/operations";

let value: VatModeRequest = "exclusive";
```

## Values

```typescript
"exclusive" | "inclusive"
```
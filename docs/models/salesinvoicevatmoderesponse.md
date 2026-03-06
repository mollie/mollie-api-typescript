# SalesInvoiceVatModeResponse

The VAT mode to use for VAT calculation. `exclusive` mode means we will apply the relevant VAT on top of the
price. `inclusive` means the prices you are providing to us already contain the VAT you want to apply.

## Example Usage

```typescript
import { SalesInvoiceVatModeResponse } from "mollie-api-typescript/models";

let value: SalesInvoiceVatModeResponse = "exclusive";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"exclusive" | "inclusive" | Unrecognized<string>
```
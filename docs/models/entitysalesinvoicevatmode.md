# EntitySalesInvoiceVatMode

The VAT mode to use for VAT calculation. `exclusive` mode means we will apply the relevant VAT on top of the
price. `inclusive` means the prices you are providing to us already contain the VAT you want to apply.

## Example Usage

```typescript
import { EntitySalesInvoiceVatMode } from "mollie-api-typescript/models";

let value: EntitySalesInvoiceVatMode = "exclusive";
```

## Values

```typescript
"exclusive" | "inclusive"
```
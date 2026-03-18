# SalesInvoiceVatSchemeResponse

The VAT scheme to create the invoice for. You must be enrolled with One Stop Shop enabled to use it.

## Example Usage

```typescript
import { SalesInvoiceVatSchemeResponse } from "mollie-api-typescript/models";

let value: SalesInvoiceVatSchemeResponse = "standard";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"standard" | "one-stop-shop" | Unrecognized<string>
```
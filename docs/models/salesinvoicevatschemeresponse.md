# SalesInvoiceVatSchemeResponse

The VAT scheme to create the invoice for. You must be enrolled with One Stop Shop enabled to use it.

## Example Usage

```typescript
import { SalesInvoiceVatSchemeResponse } from "mollie-api-typescript/models";

let value: SalesInvoiceVatSchemeResponse = "standard";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standard" | "one-stop-shop" | Unrecognized<string>
```
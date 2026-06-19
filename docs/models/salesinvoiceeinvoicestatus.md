# SalesInvoiceEInvoiceStatus

The e-invoice submission status for the invoice, if it was configured to be an e-invoice.

## Example Usage

```typescript
import { SalesInvoiceEInvoiceStatus } from "mollie-api-typescript/models";

let value: SalesInvoiceEInvoiceStatus = "issuing";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"issuing" | "issued" | "failed" | Unrecognized<string>
```
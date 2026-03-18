# SalesInvoicePaymentTermResponse

The payment term to be set on the invoice.

## Example Usage

```typescript
import { SalesInvoicePaymentTermResponse } from "mollie-api-typescript/models";

let value: SalesInvoicePaymentTermResponse = "30 days";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"7 days" | "14 days" | "30 days" | "45 days" | "60 days" | "90 days" | "120 days" | Unrecognized<string>
```
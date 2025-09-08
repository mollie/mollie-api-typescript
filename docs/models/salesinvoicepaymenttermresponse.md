# SalesInvoicePaymentTermResponse

The payment term to be set on the invoice.

## Example Usage

```typescript
import { SalesInvoicePaymentTermResponse } from "mollie-api-typescript/models";

let value: SalesInvoicePaymentTermResponse = "30 days";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"7 days" | "14 days" | "30 days" | "45 days" | "60 days" | "90 days" | "120 days" | Unrecognized<string>
```
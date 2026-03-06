# SalesInvoicePaymentDetailsSourceResponse

The way through which the invoice is to be set to paid.

## Example Usage

```typescript
import { SalesInvoicePaymentDetailsSourceResponse } from "mollie-api-typescript/models";

let value: SalesInvoicePaymentDetailsSourceResponse = "payment-link";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"manual" | "payment-link" | "payment" | Unrecognized<string>
```
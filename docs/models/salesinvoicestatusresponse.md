# SalesInvoiceStatusResponse

The current status of the invoice.

## Example Usage

```typescript
import { SalesInvoiceStatusResponse } from "mollie-api-typescript/models";

let value: SalesInvoiceStatusResponse = "draft";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "issuing" | "issued" | "pending-payment" | "paid" | "overdue" | "payment_reversed" | "cancelled" | "expired" | "failed" | Unrecognized<string>
```
# SalesInvoicePaymentDetailsSourceResponse

The way through which the invoice is to be set to paid.

## Example Usage

```typescript
import { SalesInvoicePaymentDetailsSourceResponse } from "mollie-api-typescript/models";

let value: SalesInvoicePaymentDetailsSourceResponse = "payment-link";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "payment-link" | "payment" | Unrecognized<string>
```
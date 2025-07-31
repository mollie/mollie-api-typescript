# UpdateSalesInvoiceStatusRequest

The status for the invoice to end up in.

Dependent parameters: `paymentDetails` for `paid`, `emailDetails` for `issued` and `paid`.

## Example Usage

```typescript
import { UpdateSalesInvoiceStatusRequest } from "mollie-api-typescript/models/operations";

let value: UpdateSalesInvoiceStatusRequest = "paid";
```

## Values

```typescript
"draft" | "issued" | "paid"
```
# UpdateValuesSalesInvoiceStatus

The status for the invoice to end up in.

Dependent parameters: `paymentDetails` for `paid`, `emailDetails` for `issued` and `paid`.

## Example Usage

```typescript
import { UpdateValuesSalesInvoiceStatus } from "mollie-api-typescript/models";

let value: UpdateValuesSalesInvoiceStatus = "paid";
```

## Values

```typescript
"draft" | "issued" | "paid"
```
# GetInvoiceStatus

Status of the invoice.

* `open` — The invoice is not paid yet.
* `paid` — The invoice is paid.
* `overdue` — Payment of the invoice is overdue.

## Example Usage

```typescript
import { GetInvoiceStatus } from "mollie-api-typescript/models/operations";

let value: GetInvoiceStatus = "overdue";
```

## Values

```typescript
"open" | "paid" | "overdue"
```
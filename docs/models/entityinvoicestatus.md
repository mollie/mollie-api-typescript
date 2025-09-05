# EntityInvoiceStatus

Status of the invoice.

* `open` — The invoice is not paid yet.
* `paid` — The invoice is paid.
* `overdue` — Payment of the invoice is overdue.

## Example Usage

```typescript
import { EntityInvoiceStatus } from "mollie-api-typescript/models";

let value: EntityInvoiceStatus = "overdue";
```

## Values

```typescript
"open" | "paid" | "overdue"
```
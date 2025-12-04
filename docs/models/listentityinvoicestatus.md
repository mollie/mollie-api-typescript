# ListEntityInvoiceStatus

Status of the invoice.

## Example Usage

```typescript
import { ListEntityInvoiceStatus } from "mollie-api-typescript/models";

let value: ListEntityInvoiceStatus = "open";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"open" | "paid" | "overdue" | Unrecognized<string>
```
# EntityInvoiceStatus

Status of the invoice.

## Example Usage

```typescript
import { EntityInvoiceStatus } from "mollie-api-typescript/models";

let value: EntityInvoiceStatus = "open";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "paid" | "overdue" | Unrecognized<string>
```
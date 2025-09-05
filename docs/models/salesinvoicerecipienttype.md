# SalesInvoiceRecipientType

The type of recipient, either `consumer` or `business`. This will determine what further fields are
required on the `recipient` object.

## Example Usage

```typescript
import { SalesInvoiceRecipientType } from "mollie-api-typescript/models";

let value: SalesInvoiceRecipientType = "consumer";
```

## Values

```typescript
"consumer" | "business"
```
# GetSalesInvoiceRecipientType

The type of recipient, either `consumer` or `business`. This will determine what further fields are
required on the `recipient` object.

## Example Usage

```typescript
import { GetSalesInvoiceRecipientType } from "mollie-api-typescript/models/operations";

let value: GetSalesInvoiceRecipientType = "consumer";
```

## Values

```typescript
"consumer" | "business"
```
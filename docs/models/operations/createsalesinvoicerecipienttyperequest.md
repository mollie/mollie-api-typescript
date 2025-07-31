# CreateSalesInvoiceRecipientTypeRequest

The type of recipient, either `consumer` or `business`. This will determine what further fields are
required on the `recipient` object.

## Example Usage

```typescript
import { CreateSalesInvoiceRecipientTypeRequest } from "mollie-api-typescript/models/operations";

let value: CreateSalesInvoiceRecipientTypeRequest = "consumer";
```

## Values

```typescript
"consumer" | "business"
```
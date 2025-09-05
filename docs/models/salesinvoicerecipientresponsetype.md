# SalesInvoiceRecipientResponseType

The type of recipient, either `consumer` or `business`. This will determine what further fields are
required on the `recipient` object.

## Example Usage

```typescript
import { SalesInvoiceRecipientResponseType } from "mollie-api-typescript/models";

let value: SalesInvoiceRecipientResponseType = "consumer";
```

## Values

```typescript
"consumer" | "business"
```
# SalesInvoiceRecipientTypeResponse

The type of recipient, either `consumer` or `business`. This will determine what further fields are
required on the `recipient` object.

## Example Usage

```typescript
import { SalesInvoiceRecipientTypeResponse } from "mollie-api-typescript/models";

let value: SalesInvoiceRecipientTypeResponse = "consumer";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"consumer" | "business" | Unrecognized<string>
```
# SalesInvoiceRecipientTypeResponse

The type of recipient, either `consumer` or `business`. This will determine what further fields are
required on the `recipient` object.

## Example Usage

```typescript
import { SalesInvoiceRecipientTypeResponse } from "mollie-api-typescript/models";

let value: SalesInvoiceRecipientTypeResponse = "consumer";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"consumer" | "business" | Unrecognized<string>
```
# ListMandatesMethod

Payment method of the mandate.

SEPA Direct Debit and PayPal mandates can be created directly.

## Example Usage

```typescript
import { ListMandatesMethod } from "mollie-api-typescript/models/operations";

let value: ListMandatesMethod = "directdebit";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
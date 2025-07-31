# CreateMandateMethodRequest

Payment method of the mandate.

SEPA Direct Debit and PayPal mandates can be created directly.

## Example Usage

```typescript
import { CreateMandateMethodRequest } from "mollie-api-typescript/models/operations";

let value: CreateMandateMethodRequest = "directdebit";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
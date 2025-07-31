# CreateMandateMethodResponse

Payment method of the mandate.

SEPA Direct Debit and PayPal mandates can be created directly.

## Example Usage

```typescript
import { CreateMandateMethodResponse } from "mollie-api-typescript/models/operations";

let value: CreateMandateMethodResponse = "directdebit";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
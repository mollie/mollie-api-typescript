# GetMandateMethod

Payment method of the mandate.

SEPA Direct Debit and PayPal mandates can be created directly.

## Example Usage

```typescript
import { GetMandateMethod } from "mollie-api-typescript/models/operations";

let value: GetMandateMethod = "directdebit";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
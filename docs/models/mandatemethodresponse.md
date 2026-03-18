# MandateMethodResponse

Payment method of the mandate.

SEPA Direct Debit and PayPal mandates can be created directly.

## Example Usage

```typescript
import { MandateMethodResponse } from "mollie-api-typescript/models";

let value: MandateMethodResponse = "directdebit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal" | Unrecognized<string>
```
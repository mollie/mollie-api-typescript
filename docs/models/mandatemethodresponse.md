# MandateMethodResponse

Payment method of the mandate.

SEPA Direct Debit and PayPal mandates can be created directly.

## Example Usage

```typescript
import { MandateMethodResponse } from "mollie-api-typescript/models";

let value: MandateMethodResponse = "directdebit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"creditcard" | "directdebit" | "paypal" | Unrecognized<string>
```
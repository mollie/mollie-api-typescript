# MandateResponseMethod

Payment method of the mandate.

SEPA Direct Debit and PayPal mandates can be created directly.

## Example Usage

```typescript
import { MandateResponseMethod } from "mollie-api-typescript/models";

let value: MandateResponseMethod = "directdebit";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
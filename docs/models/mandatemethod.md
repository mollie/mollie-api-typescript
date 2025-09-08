# MandateMethod

Payment method of the mandate.

SEPA Direct Debit and PayPal mandates can be created directly.

## Example Usage

```typescript
import { MandateMethod } from "mollie-api-typescript/models";

let value: MandateMethod = "directdebit";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
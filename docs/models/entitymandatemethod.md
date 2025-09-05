# EntityMandateMethod

Payment method of the mandate.

SEPA Direct Debit and PayPal mandates can be created directly.

## Example Usage

```typescript
import { EntityMandateMethod } from "mollie-api-typescript/models";

let value: EntityMandateMethod = "directdebit";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
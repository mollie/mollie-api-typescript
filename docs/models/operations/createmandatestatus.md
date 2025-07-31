# CreateMandateStatus

The status of the mandate. A status can be `pending` for mandates when the first payment is not yet finalized, or
when we did not received the IBAN yet from the first payment.

## Example Usage

```typescript
import { CreateMandateStatus } from "mollie-api-typescript/models/operations";

let value: CreateMandateStatus = "valid";
```

## Values

```typescript
"valid" | "pending" | "invalid"
```
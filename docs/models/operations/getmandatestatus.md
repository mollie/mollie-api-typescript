# GetMandateStatus

The status of the mandate. A status can be `pending` for mandates when the first payment is not yet finalized, or
when we did not received the IBAN yet from the first payment.

## Example Usage

```typescript
import { GetMandateStatus } from "mollie-api-typescript/models/operations";

let value: GetMandateStatus = "valid";
```

## Values

```typescript
"valid" | "pending" | "invalid"
```
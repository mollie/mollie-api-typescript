# MandateResponseStatus

The status of the mandate. A status can be `pending` for mandates when the first payment is not yet finalized, or
when we did not received the IBAN yet from the first payment.

## Example Usage

```typescript
import { MandateResponseStatus } from "mollie-api-typescript/models";

let value: MandateResponseStatus = "valid";
```

## Values

```typescript
"valid" | "pending" | "invalid"
```
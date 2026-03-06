# ListMandateResponseStatus

The status of the mandate. A status can be `pending` for mandates when the first payment is not yet finalized, or
when we did not received the IBAN yet from the first payment.

## Example Usage

```typescript
import { ListMandateResponseStatus } from "mollie-api-typescript/models";

let value: ListMandateResponseStatus = "valid";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"valid" | "pending" | "invalid" | Unrecognized<string>
```
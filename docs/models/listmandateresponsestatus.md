# ListMandateResponseStatus

The status of the mandate. A status can be `pending` for mandates when the first payment is not yet finalized, or
when we did not received the IBAN yet from the first payment.

## Example Usage

```typescript
import { ListMandateResponseStatus } from "mollie-api-typescript/models";

let value: ListMandateResponseStatus = "valid";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"valid" | "pending" | "invalid" | Unrecognized<string>
```
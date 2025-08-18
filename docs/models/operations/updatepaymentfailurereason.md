# UpdatePaymentFailureReason

A failure code to help understand why the payment failed.

## Example Usage

```typescript
import { UpdatePaymentFailureReason } from "mollie-api-typescript/models/operations";

let value: UpdatePaymentFailureReason = "card_declined";
```

## Values

```typescript
"authentication_abandoned" | "authentication_failed" | "authentication_required" | "authentication_unavailable_acs" | "card_declined" | "card_expired" | "inactive_card" | "insufficient_funds" | "invalid_cvv" | "invalid_card_holder_name" | "invalid_card_number" | "invalid_card_type" | "possible_fraud" | "refused_by_issuer" | "unknown_reason"
```
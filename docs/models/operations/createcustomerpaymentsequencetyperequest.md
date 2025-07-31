# CreateCustomerPaymentSequenceTypeRequest

**Only relevant for recurring payments.**

Indicate which part of a recurring sequence this payment is for.

Recurring payments can only take place if a mandate is available. A common way to establish such a mandate is
through a `first` payment. With a `first` payment, the customer agrees to automatic recurring charges taking place
on their account in the future.

If set to `recurring`, the customer's card is charged automatically.

Defaults to `oneoff`, which is a regular non-recurring payment.

For PayPal payments, recurring is only possible if your connected PayPal account allows it. You can call our
[Methods API](list-methods) with parameter `sequenceType: first` to discover which payment methods on your account
are set up correctly for recurring payments.

## Example Usage

```typescript
import { CreateCustomerPaymentSequenceTypeRequest } from "mollie-api-typescript/models/operations";

let value: CreateCustomerPaymentSequenceTypeRequest = "oneoff";
```

## Values

```typescript
"oneoff" | "first" | "recurring"
```
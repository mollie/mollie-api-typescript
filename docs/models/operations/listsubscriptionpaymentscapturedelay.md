# ListSubscriptionPaymentsCaptureDelay

**Only relevant if you wish to manage authorization and capturing separately.**

Some payment methods allow placing a hold on the card or bank account. This hold or 'authorization' can then at a
later point either be 'captured' or canceled.

By default, we charge the customer's card or bank account immediately when they complete the payment. If you set a
capture delay however, we will delay the automatic capturing of the payment for the specified amount of time. For
example `8 hours` or `2 days`.

To schedule an automatic capture, the `captureMode` must be set to `automatic`.

The maximum delay is 7 days (168 hours).

## Example Usage

```typescript
import { ListSubscriptionPaymentsCaptureDelay } from "mollie-api-typescript/models/operations";

let value: ListSubscriptionPaymentsCaptureDelay = "... hours";
```

## Values

```typescript
"... hours" | "... days"
```
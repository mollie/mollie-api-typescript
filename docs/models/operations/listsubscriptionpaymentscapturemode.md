# ListSubscriptionPaymentsCaptureMode

Indicate if the funds should be captured immediately or if you want to [place a hold](https://docs.mollie.com/docs/place-a-hold-for-a-payment#/) 
and capture at a later time.

This field needs to be set to `manual` for method `riverty`.

## Example Usage

```typescript
import { ListSubscriptionPaymentsCaptureMode } from "mollie-api-typescript/models/operations";

let value: ListSubscriptionPaymentsCaptureMode = "manual";
```

## Values

```typescript
"automatic" | "manual"
```
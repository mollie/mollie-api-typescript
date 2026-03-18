# SubscriptionMethodResponse

The payment method used for this subscription. If omitted, any of the customer's valid mandates may be used.

## Example Usage

```typescript
import { SubscriptionMethodResponse } from "mollie-api-typescript/models";

let value: SubscriptionMethodResponse = "paypal";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal" | Unrecognized<string>
```
# SubscriptionMethodResponse

The payment method used for this subscription. If omitted, any of the customer's valid mandates may be used.

## Example Usage

```typescript
import { SubscriptionMethodResponse } from "mollie-api-typescript/models";

let value: SubscriptionMethodResponse = "paypal";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"creditcard" | "directdebit" | "paypal" | Unrecognized<string>
```
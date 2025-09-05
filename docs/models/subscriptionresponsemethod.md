# SubscriptionResponseMethod

The payment method used for this subscription. If omitted, any of the customer's valid mandates may be used.

## Example Usage

```typescript
import { SubscriptionResponseMethod } from "mollie-api-typescript/models";

let value: SubscriptionResponseMethod = "paypal";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
# SubscriptionMethod

The payment method used for this subscription. If omitted, any of the customer's valid mandates may be used.

## Example Usage

```typescript
import { SubscriptionMethod } from "mollie-api-typescript/models";

let value: SubscriptionMethod = "paypal";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
# SubscriptionRequestMethod

The payment method used for this subscription. If omitted, any of the customer's valid mandates may be used.

## Example Usage

```typescript
import { SubscriptionRequestMethod } from "mollie-api-typescript/models";

let value: SubscriptionRequestMethod = "paypal";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
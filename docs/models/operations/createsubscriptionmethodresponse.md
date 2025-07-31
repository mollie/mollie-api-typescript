# CreateSubscriptionMethodResponse

The payment method used for this subscription. If omitted, any of the customer's valid mandates may be used.

## Example Usage

```typescript
import { CreateSubscriptionMethodResponse } from "mollie-api-typescript/models/operations";

let value: CreateSubscriptionMethodResponse = "paypal";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
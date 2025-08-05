# ListAllSubscriptionsMethod

The payment method used for this subscription. If omitted, any of the customer's valid mandates may be used.

## Example Usage

```typescript
import { ListAllSubscriptionsMethod } from "mollie-api-typescript/models/operations";

let value: ListAllSubscriptionsMethod = "paypal";
```

## Values

```typescript
"creditcard" | "directdebit" | "paypal"
```
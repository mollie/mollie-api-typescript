# UpdateSubscriptionStatus

The subscription's current status is directly related to the status of the underlying customer or mandate that is
enabling the subscription.

## Example Usage

```typescript
import { UpdateSubscriptionStatus } from "mollie-api-typescript/models/operations";

let value: UpdateSubscriptionStatus = "active";
```

## Values

```typescript
"pending" | "active" | "canceled" | "suspended" | "completed"
```
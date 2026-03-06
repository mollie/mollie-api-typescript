# SubscriptionResponseStatus

The subscription's current status is directly related to the status of the underlying customer or mandate that is
enabling the subscription.

## Example Usage

```typescript
import { SubscriptionResponseStatus } from "mollie-api-typescript/models";

let value: SubscriptionResponseStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "active" | "canceled" | "suspended" | "completed" | Unrecognized<string>
```
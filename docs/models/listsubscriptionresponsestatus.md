# ListSubscriptionResponseStatus

The subscription's current status is directly related to the status of the underlying customer or mandate that is
enabling the subscription.

## Example Usage

```typescript
import { ListSubscriptionResponseStatus } from "mollie-api-typescript/models";

let value: ListSubscriptionResponseStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "active" | "canceled" | "suspended" | "completed" | Unrecognized<string>
```
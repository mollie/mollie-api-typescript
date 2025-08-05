# ListAllSubscriptionsStatus

The subscription's current status is directly related to the status of the underlying customer or mandate that is
enabling the subscription.

## Example Usage

```typescript
import { ListAllSubscriptionsStatus } from "mollie-api-typescript/models/operations";

let value: ListAllSubscriptionsStatus = "active";
```

## Values

```typescript
"pending" | "active" | "canceled" | "suspended" | "completed"
```
# Resource

**⚠️ We no longer recommend using the Orders API. Please refer to the [Payments API](payments-api) instead.**

Indicate if you will use the result for the [Create order](create-order)
or the [Create payment](create-payment) endpoint.

When passing the value `orders`, the result will include payment methods
that are only available for payments created via the Orders API.

## Example Usage

```typescript
import { Resource } from "mollie-api-typescript/models/operations";

let value: Resource = "payments";
```

## Values

```typescript
"payments" | "orders"
```
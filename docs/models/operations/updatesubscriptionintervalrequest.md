# UpdateSubscriptionIntervalRequest

Interval to wait between payments, for example `1 month` or `14 days`.

The maximum interval is one year (`12 months`, `52 weeks`, or `365 days`).

## Example Usage

```typescript
import { UpdateSubscriptionIntervalRequest } from "mollie-api-typescript/models/operations";

let value: UpdateSubscriptionIntervalRequest = "... days";
```

## Values

```typescript
"... days" | "... weeks" | "... months"
```
# PayoutStatus

The status of the payout.

## Example Usage

```typescript
import { PayoutStatus } from "mollie-api-typescript/models";

let value: PayoutStatus = "requested";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"requested" | "initiated" | "processing-at-bank" | "completed" | "failed" | "canceled" | Unrecognized<string>
```
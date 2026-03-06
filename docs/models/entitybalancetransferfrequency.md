# EntityBalanceTransferFrequency

The frequency with which the available amount on the balance will be settled to the configured transfer
destination.

Settlements created during weekends or on bank holidays will take place on the next business day.

## Example Usage

```typescript
import { EntityBalanceTransferFrequency } from "mollie-api-typescript/models";

let value: EntityBalanceTransferFrequency = "daily";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"every-day" | "daily" | "every-monday" | "every-tuesday" | "every-wednesday" | "every-thursday" | "every-friday" | "monthly" | "revenue-day" | "never" | Unrecognized<string>
```
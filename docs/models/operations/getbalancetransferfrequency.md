# GetBalanceTransferFrequency

The frequency with which the available amount on the balance will be settled to the configured transfer
destination.

Settlements created during weekends or on bank holidays will take place on the next business day.

## Example Usage

```typescript
import { GetBalanceTransferFrequency } from "mollie-api-typescript/models/operations";

let value: GetBalanceTransferFrequency = "daily";
```

## Values

```typescript
"daily" | "every-monday" | "every-tuesday" | "every-wednesday" | "every-thursday" | "every-friday" | "monthly" | "never"
```
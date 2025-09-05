# TransferFrequency

The frequency with which the available amount on the balance will be settled to the configured transfer
destination.

Settlements created during weekends or on bank holidays will take place on the next business day.

## Example Usage

```typescript
import { TransferFrequency } from "mollie-api-typescript/models";

let value: TransferFrequency = "daily";
```

## Values

```typescript
"daily" | "every-monday" | "every-tuesday" | "every-wednesday" | "every-thursday" | "every-friday" | "monthly" | "never"
```
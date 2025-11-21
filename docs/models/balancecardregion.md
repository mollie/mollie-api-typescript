# BalanceCardRegion

## Example Usage

```typescript
import { BalanceCardRegion } from "mollie-api-typescript/models";

let value: BalanceCardRegion = "domestic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"intra-eea" | "intra-eu" | "domestic" | "other" | Unrecognized<string>
```
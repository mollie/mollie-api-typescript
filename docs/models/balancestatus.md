# BalanceStatus

The status of the balance.

## Example Usage

```typescript
import { BalanceStatus } from "mollie-api-typescript/models";

let value: BalanceStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | Unrecognized<string>
```
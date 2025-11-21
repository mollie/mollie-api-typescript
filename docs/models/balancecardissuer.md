# BalanceCardIssuer

## Example Usage

```typescript
import { BalanceCardIssuer } from "mollie-api-typescript/models";

let value: BalanceCardIssuer = "amex";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"amex" | "maestro" | "carte-bancaire" | "other" | Unrecognized<string>
```
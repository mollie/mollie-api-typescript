# CreditDebitIndicator

Indicates whether the transfer is a credit or debit transaction from the perspective of the account holder.

## Example Usage

```typescript
import { CreditDebitIndicator } from "mollie-api-typescript/models";

let value: CreditDebitIndicator = "debit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"credit" | "debit" | Unrecognized<string>
```
# TransactionType

Indicates what kind of transaction this is.

We may introduce new transaction types as we expand the product. We recommend building your integration
to handle unexpected values gracefully, so nothing breaks when that happens. 

## Example Usage

```typescript
import { TransactionType } from "mollie-api-typescript/models";

let value: TransactionType = "bank-transfer";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"card-payment" | "bank-transfer" | "psp-transfer" | "internal-transfer" | "ideal-payment" | "fee" | "correction" | "direct-debit" | "direct-debit-refund" | Unrecognized<string>
```
# BalanceTransferDestinationType

The default destination of automatic scheduled transfers. Currently only `bank-account` is supported.

* `bank-account` — Transfer the balance amount to an external bank account

## Example Usage

```typescript
import { BalanceTransferDestinationType } from "mollie-api-typescript/models";

let value: BalanceTransferDestinationType = "bank-account";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"bank-account" | Unrecognized<string>
```
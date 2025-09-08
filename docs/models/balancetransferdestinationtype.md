# BalanceTransferDestinationType

The default destination of automatic scheduled transfers. Currently only `bank-account` is supported.

* `bank-account` — Transfer the balance amount to an external bank account

## Example Usage

```typescript
import { BalanceTransferDestinationType } from "mollie-api-typescript/models";

let value: BalanceTransferDestinationType = "bank-account";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"bank-account" | Unrecognized<string>
```
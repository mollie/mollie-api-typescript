# GetBalanceType

The default destination of automatic scheduled transfers. Currently only `bank-account` is supported.

* `bank-account` — Transfer the balance amount to an external bank account

## Example Usage

```typescript
import { GetBalanceType } from "mollie-api-typescript/models/operations";

let value: GetBalanceType = "bank-account";
```

## Values

```typescript
"bank-account"
```
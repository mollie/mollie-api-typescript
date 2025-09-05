# EntityBalanceType

The default destination of automatic scheduled transfers. Currently only `bank-account` is supported.

* `bank-account` — Transfer the balance amount to an external bank account

## Example Usage

```typescript
import { EntityBalanceType } from "mollie-api-typescript/models";

let value: EntityBalanceType = "bank-account";
```

## Values

```typescript
"bank-account"
```
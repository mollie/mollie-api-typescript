# ListBalancesType

The default destination of automatic scheduled transfers. Currently only `bank-account` is supported.

* `bank-account` — Transfer the balance amount to an external bank account

## Example Usage

```typescript
import { ListBalancesType } from "mollie-api-typescript/models/operations";

let value: ListBalancesType = "bank-account";
```

## Values

```typescript
"bank-account"
```
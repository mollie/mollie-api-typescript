# IncludeWallets

A comma-separated list of the wallets you support in your checkout. Wallets often require wallet specific code
to check if they are available on the shoppers device, hence the need to indicate your support.

## Example Usage

```typescript
import { IncludeWallets } from "mollie-api-typescript/models/operations";

let value: IncludeWallets = "applepay";
```

## Values

```typescript
"applepay"
```
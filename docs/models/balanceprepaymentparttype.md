# BalancePrepaymentPartType

## Example Usage

```typescript
import { BalancePrepaymentPartType } from "mollie-api-typescript/models";

let value: BalancePrepaymentPartType = "fee";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"fee" | "fee-reimbursement" | "fee-discount" | "fee-vat" | "fee-rounding-compensation" | Unrecognized<string>
```
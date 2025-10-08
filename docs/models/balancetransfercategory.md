# BalanceTransferCategory

The type of the transfer. Different fees may apply to different types of transfers.

## Example Usage

```typescript
import { BalanceTransferCategory } from "mollie-api-typescript/models";

let value: BalanceTransferCategory = "invoice_collection";
```

## Values

```typescript
"invoice_collection" | "purchase" | "chargeback" | "refund" | "service_penalty" | "discount_compensation" | "manual_correction" | "other_fee"
```
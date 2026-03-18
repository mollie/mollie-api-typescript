# BalanceTransferCategoryResponse

The type of the transfer. Different fees may apply to different types of transfers.

## Example Usage

```typescript
import { BalanceTransferCategoryResponse } from "mollie-api-typescript/models";

let value: BalanceTransferCategoryResponse = "invoice_collection";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invoice_collection" | "purchase" | "chargeback" | "refund" | "service_penalty" | "discount_compensation" | "manual_correction" | "other_fee" | Unrecognized<string>
```
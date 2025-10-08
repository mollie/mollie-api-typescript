# BalanceTransferCategoryResponse

The type of the transfer. Different fees may apply to different types of transfers.

## Example Usage

```typescript
import { BalanceTransferCategoryResponse } from "mollie-api-typescript/models";

let value: BalanceTransferCategoryResponse = "invoice_collection";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"invoice_collection" | "purchase" | "chargeback" | "refund" | "service_penalty" | "discount_compensation" | "manual_correction" | "other_fee" | Unrecognized<string>
```
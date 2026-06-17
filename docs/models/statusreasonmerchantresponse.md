# StatusReasonMerchantResponse

## Example Usage

```typescript
import { StatusReasonMerchantResponse } from "mollie-api-typescript/models";

let value: StatusReasonMerchantResponse =
  "transaction_not_permitted_at_terminal";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"merchant_id_not_found" | "merchant_account_closed" | "terminal_id_not_found" | "terminal_closed" | "invalid_category_code" | "invalid_currency" | "missing_cvv2_cvc2" | "cvv2_not_allowed" | "merchant_not_registered_vbv" | "merchant_not_registered_for_amex" | "transaction_not_permitted_at_terminal" | "agreement_terminal_not_related" | "invalid_processor_id" | "invalid_merchant_data" | "sub_merchant_account_closed" | Unrecognized<string>
```
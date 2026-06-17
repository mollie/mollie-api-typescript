# StatusReasonVoucherResponse

## Example Usage

```typescript
import { StatusReasonVoucherResponse } from "mollie-api-typescript/models";

let value: StatusReasonVoucherResponse = "insufficient_funds";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"service_failed" | "invalid_operation" | "authorization_error" | "login_failed_without_reason" | "invalid_retailer" | "refer_to_card_issuer" | "card_does_not_exist" | "expired_card" | "card_is_blocked" | "insufficient_funds" | "invalid_card_id" | "card_is_transferred" | "card_is_not_active" | "incorrect_purchase_value" | "card_not_available" | "wrong_currency" | "login_failed_unknown_user" | "login_failed_invalid_password" | "invalid_pin" | "invalid_ean_code" | Unrecognized<string>
```
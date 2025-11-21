# BalanceFeeType

## Example Usage

```typescript
import { BalanceFeeType } from "mollie-api-typescript/models";

let value: BalanceFeeType = "payment-fee";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"payment-fee" | "direct-debit-failure-fee" | "unauthorized-direct-debit-fee" | "bank-charged-direct-debit-failure-fee" | "partner-commission" | "application-fee" | "capture-fee" | "refund-fee" | "chargeback-fee" | "payment-notification-fee" | "transfer-notification-fee" | "payout-fee" | "fee-discount" | "fee-reimbursement" | "platform-volume-fee" | "platform-connected-organizations-fee" | "balance-charge-fee" | "3ds-authentication-attempt-fee" | "terminal-monthly-fee" | "acceptance-risk-fee" | "top-up-fee" | "payment-gateway-fee" | "mastercard-specialty-merchant-program-processing-fee" | "mastercard-specialty-merchant-program-registration-fee" | "visa-integrity-risk-program-processing-fee" | "visa-integrity-risk-program-registration-fee" | "minimum-invoice-amount-fee" | Unrecognized<string>
```
# BalanceTransactionType

## Example Usage

```typescript
import { BalanceTransactionType } from "mollie-api-typescript/models";

let value: BalanceTransactionType = "payment";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"application-fee" | "capture" | "chargeback" | "chargeback-reversal" | "failed-payment-fee" | "failed-payment" | "invoice-compensation" | "payment" | "payment-fee" | "payment-commission" | "refund" | "returned-refund" | "returned-transfer" | "split-payment" | "outgoing-transfer" | "capture-commission" | "canceled-outgoing-transfer" | "incoming-transfer" | "api-payment-rolling-reserve-release" | "capture-rolling-reserve-release" | "reimbursement-fee" | "balance-correction" | "unauthorized-direct-debit" | "bank-charged-failure-fee" | "platform-payment-refund" | "refund-compensation" | "returned-refund-compensation" | "returned-platform-payment-refund" | "platform-payment-chargeback" | "chargeback-compensation" | "reversed-platform-payment-chargeback" | "reversed-chargeback-compensation" | "failed-split-payment-platform" | "failed-split-payment-compensation" | "cash-advance-loan" | "platform-connected-organizations-fee" | "split-transaction" | "managed-fee" | "returned-managed-fee" | "topup" | "balance-reserve" | "balance-reserve-return" | "movement" | "post-payment-split-payment" | "cash-collateral-issuance" | "cash-collateral-release" | Unrecognized<string>
```
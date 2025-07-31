# ListBalanceTransactionsType

The type of transaction, for example `payment` or `refund`. Values include the below examples, although this list
is not definitive.

* Regular payment processing: `payment` `capture` `unauthorized-direct-debit` `failed-payment`
* Refunds and chargebacks: `refund` `returned-refund` `chargeback` `chargeback-reversal`
* Settlements: `outgoing-transfer` `canceled-outgoing-transfer` `returned-transfer`
* Invoicing: `invoice-compensation` `balance-correction`
* Mollie Connect: `application-fee` `split-payment` `platform-payment-refund` `platform-payment-chargeback`

## Example Usage

```typescript
import { ListBalanceTransactionsType } from "mollie-api-typescript/models/operations";

let value: ListBalanceTransactionsType = "payment";
```

## Values

```typescript
"application-fee" | "capture" | "chargeback" | "chargeback-reversal" | "failed-payment-fee" | "failed-payment" | "invoice-compensation" | "payment" | "payment-fee" | "payment-commission" | "refund" | "returned-refund" | "returned-transfer" | "split-payment" | "outgoing-transfer" | "capture-commission" | "canceled-outgoing-transfer" | "incoming-transfer" | "api-payment-rolling-reserve-release" | "capture-rolling-reserve-release" | "reimbursement-fee" | "balance-correction" | "unauthorized-direct-debit" | "bank-charged-failure-fee" | "platform-payment-refund" | "refund-compensation" | "returned-refund-compensation" | "returned-platform-payment-refund" | "platform-payment-chargeback" | "chargeback-compensation" | "reversed-platform-payment-chargeback" | "reversed-chargeback-compensation" | "failed-split-payment-platform" | "failed-split-payment-compensation" | "cash-advance-loan" | "platform-connected-organizations-fee" | "split-transaction" | "managed-fee" | "returned-managed-fee" | "topup" | "balance-reserve" | "balance-reserve-return" | "movement" | "post-payment-split-payment" | "cash-collateral-issuance" | "cash-collateral-release"
```
# EntityWebhookEventWebhookEventTypes

The list of events to enable for this webhook. You may specify `'*'` to add all events, except those
that require explicit selection.

## Example Usage

```typescript
import { EntityWebhookEventWebhookEventTypes } from "mollie-api-typescript/models";

let value: EntityWebhookEventWebhookEventTypes = "payment-link.paid";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"payment.paid" | "payment.authorized" | "payment.failed" | "payment.canceled" | "payment.expired" | "payment.pending" | "refund.queued" | "refund.pending" | "refund.processing" | "refund.refunded" | "refund.failed" | "refund.canceled" | "payment-link.paid" | "balance-transaction.created" | "payout.initiated" | "payout.processing-at-bank" | "payout.completed" | "payout.canceled" | "payout.failed" | "sales-invoice.created" | "sales-invoice.issued" | "sales-invoice.canceled" | "sales-invoice.paid" | "sales-invoice.e-invoice-failed" | "sales-invoice.e-invoice-issued" | "business-account-transfer.requested" | "business-account-transfer.initiated" | "business-account-transfer.pending-review" | "business-account-transfer.processed" | "business-account-transfer.failed" | "business-account-transfer.blocked" | "business-account-transfer.returned" | "*" | Unrecognized<string>
```
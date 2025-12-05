# EntityWebhookEventWebhookEventTypes

The list of events to enable for this webhook. You may specify `'*'` to add all events, except those
that require explicit selection.

## Example Usage

```typescript
import { EntityWebhookEventWebhookEventTypes } from "mollie-api-typescript/models";

let value: EntityWebhookEventWebhookEventTypes = "payment-link.paid";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"payment-link.paid" | "balance-transaction.created" | "sales-invoice.created" | "sales-invoice.issued" | "sales-invoice.canceled" | "sales-invoice.paid" | "*" | Unrecognized<string>
```
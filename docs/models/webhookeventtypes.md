# WebhookEventTypes

The list of events to enable for this webhook. You may specify `'*'` to add all events, except those
that require explicit selection.

## Example Usage

```typescript
import { WebhookEventTypes } from "mollie-api-typescript/models";

let value: WebhookEventTypes = "payment-link.paid";
```

## Values

```typescript
"payment-link.paid" | "balance-transaction.created" | "sales-invoice.created" | "sales-invoice.issued" | "sales-invoice.canceled" | "sales-invoice.paid" | "*"
```
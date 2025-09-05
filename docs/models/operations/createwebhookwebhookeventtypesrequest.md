# CreateWebhookWebhookEventTypesRequest

The list of events to enable for this webhook. You may specify `'*'` to add all events, except those
that require explicit selection. Separate multiple event types with a comma.

## Example Usage

```typescript
import { CreateWebhookWebhookEventTypesRequest } from "mollie-api-typescript/models/operations";

let value: CreateWebhookWebhookEventTypesRequest = "payment-link.paid";
```

## Values

```typescript
"payment-link.paid" | "balance-transaction.created" | "sales-invoice.created" | "sales-invoice.issued" | "sales-invoice.canceled" | "sales-invoice.paid" | "*"
```
# ListWebhooksEventTypes

Used to filter out only the webhooks that are subscribed to certain types of events.

## Example Usage

```typescript
import { ListWebhooksEventTypes } from "mollie-api-typescript/models/operations";

let value: ListWebhooksEventTypes = "payment-link.paid";
```

## Values

```typescript
"payment-link.paid" | "balance-transaction.created" | "sales-invoice.created" | "sales-invoice.issued" | "sales-invoice.canceled" | "sales-invoice.paid"
```
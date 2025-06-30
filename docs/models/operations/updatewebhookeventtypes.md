# UpdateWebhookEventTypes

The list of events to enable for this webhook. You may specify `'*'` to add all events, except those that require explicit selection. Separate multiple event types with a comma.

## Example Usage

```typescript
import { UpdateWebhookEventTypes } from "mollie-api-typescript/models/operations";

let value: UpdateWebhookEventTypes = "payment-link.paid";
```

## Values

```typescript
"payment-link.paid"
```
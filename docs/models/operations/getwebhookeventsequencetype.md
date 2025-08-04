# GetWebhookEventSequenceType

If set to `first`, a payment mandate is established right after a payment is made by the customer.

Defaults to `oneoff`, which is a regular payment link and will not establish a mandate after payment.

The mandate ID can be retrieved by making a call to the
[Payment Link Payments Endpoint](get-payment-link-payments).

## Example Usage

```typescript
import { GetWebhookEventSequenceType } from "mollie-api-typescript/models/operations";

let value: GetWebhookEventSequenceType = "oneoff";
```

## Values

```typescript
"oneoff" | "first"
```
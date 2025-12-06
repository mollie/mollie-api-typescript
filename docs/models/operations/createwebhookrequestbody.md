# CreateWebhookRequestBody

## Example Usage

```typescript
import { CreateWebhookRequestBody } from "mollie-api-typescript/models/operations";

let value: CreateWebhookRequestBody = {
  name: "Webhook #1",
  url: "https://mollie.com/",
  eventTypes: "payment-link.paid",
  testmode: false,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | A name that identifies the webhook.                                                                                | Webhook #1                                                                                                         |
| `url`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The URL Mollie will send the events to. This URL must be publicly accessible.                                      | https://mollie.com/                                                                                                |
| `eventTypes`                                                                                                       | *operations.CreateWebhookEventTypes*                                                                               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `testmode`                                                                                                         | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Whether to create the entity in test mode or live mode.<br/><br/>You can enable test mode by setting `testmode` to `true`. | false                                                                                                              |
# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "mollie-api-typescript/models/operations";

let value: UpdateWebhookRequest = {
  webhookId: "hook_1234567890",
  idempotencyKey: "123e4567-e89b-12d3-a456-426",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `webhookId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | Provide the ID of the related webhook.                                                     | hook_1234567890                                                                            |
| `idempotencyKey`                                                                           | *string*                                                                                   | :heavy_minus_sign:                                                                         | A unique key to ensure idempotent requests. This key should be a UUID v4 string.           | 123e4567-e89b-12d3-a456-426                                                                |
| `requestBody`                                                                              | [operations.UpdateWebhookRequestBody](../../models/operations/updatewebhookrequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
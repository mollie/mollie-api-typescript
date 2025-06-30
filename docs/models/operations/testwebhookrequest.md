# TestWebhookRequest

## Example Usage

```typescript
import { TestWebhookRequest } from "mollie-api-typescript/models/operations";

let value: TestWebhookRequest = {
  id: "hook_B2EyhTH5N4KWUnoYPcgiH",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Provide the ID of the item you want to perform this operation on.                      | hook_B2EyhTH5N4KWUnoYPcgiH                                                             |
| `requestBody`                                                                          | [operations.TestWebhookRequestBody](../../models/operations/testwebhookrequestbody.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
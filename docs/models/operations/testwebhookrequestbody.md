# TestWebhookRequestBody

## Example Usage

```typescript
import { TestWebhookRequestBody } from "mollie-api-typescript/models/operations";

let value: TestWebhookRequestBody = {
  testmode: false,
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         | Example                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `testmode`                                                                                                                                          | *boolean*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                  | You can enable test mode by setting `testmode` to `true`.<br/><br/>Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa. | false                                                                                                                                               |
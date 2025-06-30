# TestWebhookUnprocessableEntityLinks

## Example Usage

```typescript
import { TestWebhookUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: TestWebhookUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                  | [operations.TestWebhookUnprocessableEntityDocumentation](../../models/operations/testwebhookunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                               | The URL to the generic Mollie API error handling guide.                                                                          |
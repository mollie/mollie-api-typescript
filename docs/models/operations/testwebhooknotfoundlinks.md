# TestWebhookNotFoundLinks

## Example Usage

```typescript
import { TestWebhookNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: TestWebhookNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                            | [operations.TestWebhookNotFoundDocumentation](../../models/operations/testwebhooknotfounddocumentation.md) | :heavy_check_mark:                                                                                         | The URL to the generic Mollie API error handling guide.                                                    |
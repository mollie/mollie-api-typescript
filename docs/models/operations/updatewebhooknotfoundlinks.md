# UpdateWebhookNotFoundLinks

## Example Usage

```typescript
import { UpdateWebhookNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: UpdateWebhookNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                | [operations.UpdateWebhookNotFoundDocumentation](../../models/operations/updatewebhooknotfounddocumentation.md) | :heavy_check_mark:                                                                                             | The URL to the generic Mollie API error handling guide.                                                        |
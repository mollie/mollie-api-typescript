# UpdateWebhookUnprocessableEntityLinks

## Example Usage

```typescript
import { UpdateWebhookUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: UpdateWebhookUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                                                      | [operations.UpdateWebhookUnprocessableEntityDocumentation](../../models/operations/updatewebhookunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                   | The URL to the generic Mollie API error handling guide.                                                                              |
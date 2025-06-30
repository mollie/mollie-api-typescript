# DeleteWebhookUnprocessableEntityLinks

## Example Usage

```typescript
import { DeleteWebhookUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: DeleteWebhookUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                                                      | [operations.DeleteWebhookUnprocessableEntityDocumentation](../../models/operations/deletewebhookunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                   | The URL to the generic Mollie API error handling guide.                                                                              |
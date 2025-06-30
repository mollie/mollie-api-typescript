# ListWebhooksLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListWebhooksLinks } from "mollie-api-typescript/models/operations";

let value: ListWebhooksLinks = {
  self: {
    href: "https://...",
    type: "application/hal+json",
  },
  previous: {
    href: "https://...",
    type: "application/hal+json",
  },
  next: {
    href: "https://...",
    type: "application/hal+json",
  },
  documentation: {
    href: "https://...",
    type: "application/hal+json",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `self`                                                                                       | [operations.ListWebhooksSelf](../../models/operations/listwebhooksself.md)                   | :heavy_minus_sign:                                                                           | The URL to the current set of items.                                                         |
| `previous`                                                                                   | [operations.ListWebhooksPrevious](../../models/operations/listwebhooksprevious.md)           | :heavy_minus_sign:                                                                           | The previous set of items, if available.                                                     |
| `next`                                                                                       | [operations.ListWebhooksNext](../../models/operations/listwebhooksnext.md)                   | :heavy_minus_sign:                                                                           | The next set of items, if available.                                                         |
| `documentation`                                                                              | [operations.ListWebhooksDocumentation](../../models/operations/listwebhooksdocumentation.md) | :heavy_minus_sign:                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.   |
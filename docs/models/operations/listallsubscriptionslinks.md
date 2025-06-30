# ListAllSubscriptionsLinks

Links to help navigate through the lists of items. Every URL object will contain an `href` and a `type` field.

## Example Usage

```typescript
import { ListAllSubscriptionsLinks } from "mollie-api-typescript/models/operations";

let value: ListAllSubscriptionsLinks = {
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `self`                                                                                                       | [operations.ListAllSubscriptionsSelf](../../models/operations/listallsubscriptionsself.md)                   | :heavy_minus_sign:                                                                                           | The URL to the current set of items.                                                                         |
| `previous`                                                                                                   | [operations.ListAllSubscriptionsPrevious](../../models/operations/listallsubscriptionsprevious.md)           | :heavy_minus_sign:                                                                                           | The previous set of items, if available.                                                                     |
| `next`                                                                                                       | [operations.ListAllSubscriptionsNext](../../models/operations/listallsubscriptionsnext.md)                   | :heavy_minus_sign:                                                                                           | The next set of items, if available.                                                                         |
| `documentation`                                                                                              | [operations.ListAllSubscriptionsDocumentation](../../models/operations/listallsubscriptionsdocumentation.md) | :heavy_minus_sign:                                                                                           | In v2 endpoints, URLs are commonly represented as objects with an `href` and `type` field.                   |
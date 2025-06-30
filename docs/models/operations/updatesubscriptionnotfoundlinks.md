# UpdateSubscriptionNotFoundLinks

## Example Usage

```typescript
import { UpdateSubscriptionNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: UpdateSubscriptionNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                                          | [operations.UpdateSubscriptionNotFoundDocumentation](../../models/operations/updatesubscriptionnotfounddocumentation.md) | :heavy_check_mark:                                                                                                       | The URL to the generic Mollie API error handling guide.                                                                  |
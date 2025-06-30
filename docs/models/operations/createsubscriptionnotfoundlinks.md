# CreateSubscriptionNotFoundLinks

## Example Usage

```typescript
import { CreateSubscriptionNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: CreateSubscriptionNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                                          | [operations.CreateSubscriptionNotFoundDocumentation](../../models/operations/createsubscriptionnotfounddocumentation.md) | :heavy_check_mark:                                                                                                       | The URL to the generic Mollie API error handling guide.                                                                  |
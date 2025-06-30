# TooManyRequestsLinks

## Example Usage

```typescript
import { TooManyRequestsLinks } from "mollie-api-typescript/models/operations";

let value: TooManyRequestsLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                    | [operations.TooManyRequestsDocumentation](../../models/operations/toomanyrequestsdocumentation.md) | :heavy_check_mark:                                                                                 | The URL to the generic Mollie API error handling guide.                                            |
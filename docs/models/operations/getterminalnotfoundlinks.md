# GetTerminalNotFoundLinks

## Example Usage

```typescript
import { GetTerminalNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: GetTerminalNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                            | [operations.GetTerminalNotFoundDocumentation](../../models/operations/getterminalnotfounddocumentation.md) | :heavy_check_mark:                                                                                         | The URL to the generic Mollie API error handling guide.                                                    |
# ListTerminalsBadRequestLinks

## Example Usage

```typescript
import { ListTerminalsBadRequestLinks } from "mollie-api-typescript/models/operations";

let value: ListTerminalsBadRequestLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                                    | [operations.ListTerminalsBadRequestDocumentation](../../models/operations/listterminalsbadrequestdocumentation.md) | :heavy_check_mark:                                                                                                 | The URL to the generic Mollie API error handling guide.                                                            |
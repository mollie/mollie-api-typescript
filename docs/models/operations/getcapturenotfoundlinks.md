# GetCaptureNotFoundLinks

## Example Usage

```typescript
import { GetCaptureNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: GetCaptureNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                          | [operations.GetCaptureNotFoundDocumentation](../../models/operations/getcapturenotfounddocumentation.md) | :heavy_check_mark:                                                                                       | The URL to the generic Mollie API error handling guide.                                                  |
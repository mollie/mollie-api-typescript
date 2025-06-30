# GetClientNotFoundLinks

## Example Usage

```typescript
import { GetClientNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: GetClientNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                        | [operations.GetClientNotFoundDocumentation](../../models/operations/getclientnotfounddocumentation.md) | :heavy_check_mark:                                                                                     | The URL to the generic Mollie API error handling guide.                                                |
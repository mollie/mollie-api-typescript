# GetMethodNotFoundLinks

## Example Usage

```typescript
import { GetMethodNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: GetMethodNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                        | [operations.GetMethodNotFoundDocumentation](../../models/operations/getmethodnotfounddocumentation.md) | :heavy_check_mark:                                                                                     | The URL to the generic Mollie API error handling guide.                                                |
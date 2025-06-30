# DeleteProfileGoneLinks

## Example Usage

```typescript
import { DeleteProfileGoneLinks } from "mollie-api-typescript/models/operations";

let value: DeleteProfileGoneLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                        | [operations.DeleteProfileGoneDocumentation](../../models/operations/deleteprofilegonedocumentation.md) | :heavy_check_mark:                                                                                     | The URL to the generic Mollie API error handling guide.                                                |
# UpdateProfileGoneLinks

## Example Usage

```typescript
import { UpdateProfileGoneLinks } from "mollie-api-typescript/models/operations";

let value: UpdateProfileGoneLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                        | [operations.UpdateProfileGoneDocumentation](../../models/operations/updateprofilegonedocumentation.md) | :heavy_check_mark:                                                                                     | The URL to the generic Mollie API error handling guide.                                                |
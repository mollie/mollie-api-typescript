# UpdateProfileNotFoundLinks

## Example Usage

```typescript
import { UpdateProfileNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: UpdateProfileNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                | [operations.UpdateProfileNotFoundDocumentation](../../models/operations/updateprofilenotfounddocumentation.md) | :heavy_check_mark:                                                                                             | The URL to the generic Mollie API error handling guide.                                                        |
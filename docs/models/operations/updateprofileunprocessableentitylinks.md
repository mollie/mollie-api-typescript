# UpdateProfileUnprocessableEntityLinks

## Example Usage

```typescript
import { UpdateProfileUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: UpdateProfileUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                                                      | [operations.UpdateProfileUnprocessableEntityDocumentation](../../models/operations/updateprofileunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                   | The URL to the generic Mollie API error handling guide.                                                                              |
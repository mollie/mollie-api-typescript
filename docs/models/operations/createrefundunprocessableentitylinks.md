# CreateRefundUnprocessableEntityLinks

## Example Usage

```typescript
import { CreateRefundUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: CreateRefundUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                    | [operations.CreateRefundUnprocessableEntityDocumentation](../../models/operations/createrefundunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                 | The URL to the generic Mollie API error handling guide.                                                                            |
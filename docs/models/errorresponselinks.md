# ErrorResponseLinks

## Example Usage

```typescript
import { ErrorResponseLinks } from "mollie-api-typescript/models";

let value: ErrorResponseLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `documentation`                                         | [models.Documentation](../models/documentation.md)      | :heavy_check_mark:                                      | The URL to the generic Mollie API error handling guide. |
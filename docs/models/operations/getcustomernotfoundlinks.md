# GetCustomerNotFoundLinks

## Example Usage

```typescript
import { GetCustomerNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: GetCustomerNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                            | [operations.GetCustomerNotFoundDocumentation](../../models/operations/getcustomernotfounddocumentation.md) | :heavy_check_mark:                                                                                         | The URL to the generic Mollie API error handling guide.                                                    |
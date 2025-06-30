# CreateCustomerNotFoundLinks

## Example Usage

```typescript
import { CreateCustomerNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: CreateCustomerNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                  | [operations.CreateCustomerNotFoundDocumentation](../../models/operations/createcustomernotfounddocumentation.md) | :heavy_check_mark:                                                                                               | The URL to the generic Mollie API error handling guide.                                                          |
# UpdateCustomerNotFoundLinks

## Example Usage

```typescript
import { UpdateCustomerNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: UpdateCustomerNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                  | [operations.UpdateCustomerNotFoundDocumentation](../../models/operations/updatecustomernotfounddocumentation.md) | :heavy_check_mark:                                                                                               | The URL to the generic Mollie API error handling guide.                                                          |
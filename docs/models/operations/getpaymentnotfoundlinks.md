# GetPaymentNotFoundLinks

## Example Usage

```typescript
import { GetPaymentNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: GetPaymentNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                          | [operations.GetPaymentNotFoundDocumentation](../../models/operations/getpaymentnotfounddocumentation.md) | :heavy_check_mark:                                                                                       | The URL to the generic Mollie API error handling guide.                                                  |
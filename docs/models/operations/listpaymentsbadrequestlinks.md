# ListPaymentsBadRequestLinks

## Example Usage

```typescript
import { ListPaymentsBadRequestLinks } from "mollie-api-typescript/models/operations";

let value: ListPaymentsBadRequestLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                  | [operations.ListPaymentsBadRequestDocumentation](../../models/operations/listpaymentsbadrequestdocumentation.md) | :heavy_check_mark:                                                                                               | The URL to the generic Mollie API error handling guide.                                                          |
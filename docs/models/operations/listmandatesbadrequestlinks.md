# ListMandatesBadRequestLinks

## Example Usage

```typescript
import { ListMandatesBadRequestLinks } from "mollie-api-typescript/models/operations";

let value: ListMandatesBadRequestLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                  | [operations.ListMandatesBadRequestDocumentation](../../models/operations/listmandatesbadrequestdocumentation.md) | :heavy_check_mark:                                                                                               | The URL to the generic Mollie API error handling guide.                                                          |
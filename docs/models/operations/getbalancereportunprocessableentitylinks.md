# GetBalanceReportUnprocessableEntityLinks

## Example Usage

```typescript
import { GetBalanceReportUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: GetBalanceReportUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                                                            | [operations.GetBalanceReportUnprocessableEntityDocumentation](../../models/operations/getbalancereportunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                         | The URL to the generic Mollie API error handling guide.                                                                                    |
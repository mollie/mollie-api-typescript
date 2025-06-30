# ListRefundsBadRequestLinks

## Example Usage

```typescript
import { ListRefundsBadRequestLinks } from "mollie-api-typescript/models/operations";

let value: ListRefundsBadRequestLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                | [operations.ListRefundsBadRequestDocumentation](../../models/operations/listrefundsbadrequestdocumentation.md) | :heavy_check_mark:                                                                                             | The URL to the generic Mollie API error handling guide.                                                        |
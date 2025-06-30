# ListBalanceTransactionsBadRequestLinks

## Example Usage

```typescript
import { ListBalanceTransactionsBadRequestLinks } from "mollie-api-typescript/models/operations";

let value: ListBalanceTransactionsBadRequestLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                        | [operations.ListBalanceTransactionsBadRequestDocumentation](../../models/operations/listbalancetransactionsbadrequestdocumentation.md) | :heavy_check_mark:                                                                                                                     | The URL to the generic Mollie API error handling guide.                                                                                |
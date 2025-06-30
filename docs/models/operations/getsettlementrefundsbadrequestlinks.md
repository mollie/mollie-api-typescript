# GetSettlementRefundsBadRequestLinks

## Example Usage

```typescript
import { GetSettlementRefundsBadRequestLinks } from "mollie-api-typescript/models/operations";

let value: GetSettlementRefundsBadRequestLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                  | [operations.GetSettlementRefundsBadRequestDocumentation](../../models/operations/getsettlementrefundsbadrequestdocumentation.md) | :heavy_check_mark:                                                                                                               | The URL to the generic Mollie API error handling guide.                                                                          |
# ListSettlementsBadRequestLinks

## Example Usage

```typescript
import { ListSettlementsBadRequestLinks } from "mollie-api-typescript/models/operations";

let value: ListSettlementsBadRequestLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                        | [operations.ListSettlementsBadRequestDocumentation](../../models/operations/listsettlementsbadrequestdocumentation.md) | :heavy_check_mark:                                                                                                     | The URL to the generic Mollie API error handling guide.                                                                |
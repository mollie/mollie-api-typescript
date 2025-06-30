# ListChargebacksBadRequestLinks

## Example Usage

```typescript
import { ListChargebacksBadRequestLinks } from "mollie-api-typescript/models/operations";

let value: ListChargebacksBadRequestLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                        | [operations.ListChargebacksBadRequestDocumentation](../../models/operations/listchargebacksbadrequestdocumentation.md) | :heavy_check_mark:                                                                                                     | The URL to the generic Mollie API error handling guide.                                                                |
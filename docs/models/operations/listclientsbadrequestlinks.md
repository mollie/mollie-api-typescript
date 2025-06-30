# ListClientsBadRequestLinks

## Example Usage

```typescript
import { ListClientsBadRequestLinks } from "mollie-api-typescript/models/operations";

let value: ListClientsBadRequestLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                | [operations.ListClientsBadRequestDocumentation](../../models/operations/listclientsbadrequestdocumentation.md) | :heavy_check_mark:                                                                                             | The URL to the generic Mollie API error handling guide.                                                        |
# CreateClientLinkUnprocessableEntityLinks

## Example Usage

```typescript
import { CreateClientLinkUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: CreateClientLinkUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                                                            | [operations.CreateClientLinkUnprocessableEntityDocumentation](../../models/operations/createclientlinkunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                         | The URL to the generic Mollie API error handling guide.                                                                                    |
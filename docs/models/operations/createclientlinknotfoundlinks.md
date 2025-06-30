# CreateClientLinkNotFoundLinks

## Example Usage

```typescript
import { CreateClientLinkNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: CreateClientLinkNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                      | [operations.CreateClientLinkNotFoundDocumentation](../../models/operations/createclientlinknotfounddocumentation.md) | :heavy_check_mark:                                                                                                   | The URL to the generic Mollie API error handling guide.                                                              |
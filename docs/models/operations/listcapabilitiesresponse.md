# ListCapabilitiesResponse

A list of capabilities.

## Example Usage

```typescript
import { ListCapabilitiesResponse } from "mollie-api-typescript/models/operations";

let value: ListCapabilitiesResponse = {
  count: 2,
  embedded: {
    capabilities: [],
  },
  links: {
    documentation: {
      href: "https://...",
      type: "application/hal+json",
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `count`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The number of items in this result set.                                                    | 2                                                                                          |
| `embedded`                                                                                 | [operations.ListCapabilitiesEmbedded](../../models/operations/listcapabilitiesembedded.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `links`                                                                                    | [operations.ListCapabilitiesLinks](../../models/operations/listcapabilitieslinks.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
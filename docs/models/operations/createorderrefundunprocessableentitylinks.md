# CreateOrderRefundUnprocessableEntityLinks

## Example Usage

```typescript
import { CreateOrderRefundUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: CreateOrderRefundUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                              | [operations.CreateOrderRefundUnprocessableEntityDocumentation](../../models/operations/createorderrefundunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                           | The URL to the generic Mollie API error handling guide.                                                                                      |
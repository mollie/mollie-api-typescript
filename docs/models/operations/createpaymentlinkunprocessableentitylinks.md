# CreatePaymentLinkUnprocessableEntityLinks

## Example Usage

```typescript
import { CreatePaymentLinkUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: CreatePaymentLinkUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                              | [operations.CreatePaymentLinkUnprocessableEntityDocumentation](../../models/operations/createpaymentlinkunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                           | The URL to the generic Mollie API error handling guide.                                                                                      |
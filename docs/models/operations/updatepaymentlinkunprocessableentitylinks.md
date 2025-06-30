# UpdatePaymentLinkUnprocessableEntityLinks

## Example Usage

```typescript
import { UpdatePaymentLinkUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: UpdatePaymentLinkUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                              | [operations.UpdatePaymentLinkUnprocessableEntityDocumentation](../../models/operations/updatepaymentlinkunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                           | The URL to the generic Mollie API error handling guide.                                                                                      |
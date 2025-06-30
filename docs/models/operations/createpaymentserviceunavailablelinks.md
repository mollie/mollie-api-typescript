# CreatePaymentServiceUnavailableLinks

## Example Usage

```typescript
import { CreatePaymentServiceUnavailableLinks } from "mollie-api-typescript/models/operations";

let value: CreatePaymentServiceUnavailableLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                    | [operations.CreatePaymentServiceUnavailableDocumentation](../../models/operations/createpaymentserviceunavailabledocumentation.md) | :heavy_check_mark:                                                                                                                 | The URL to the generic Mollie API error handling guide.                                                                            |
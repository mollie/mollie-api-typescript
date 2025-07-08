# GetPaymentLinkNotFoundLinks

## Example Usage

```typescript
import { GetPaymentLinkNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: GetPaymentLinkNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                  | [operations.GetPaymentLinkDocumentation](../../models/operations/getpaymentlinkdocumentation.md) | :heavy_check_mark:                                                                               | The URL to the generic Mollie API error handling guide.                                          |
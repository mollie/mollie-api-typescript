# CreatePaymentLinkNotFoundLinks

## Example Usage

```typescript
import { CreatePaymentLinkNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: CreatePaymentLinkNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                        | [operations.CreatePaymentLinkNotFoundDocumentation](../../models/operations/createpaymentlinknotfounddocumentation.md) | :heavy_check_mark:                                                                                                     | The URL to the generic Mollie API error handling guide.                                                                |
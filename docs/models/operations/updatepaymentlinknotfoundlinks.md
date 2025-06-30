# UpdatePaymentLinkNotFoundLinks

## Example Usage

```typescript
import { UpdatePaymentLinkNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: UpdatePaymentLinkNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                        | [operations.UpdatePaymentLinkNotFoundDocumentation](../../models/operations/updatepaymentlinknotfounddocumentation.md) | :heavy_check_mark:                                                                                                     | The URL to the generic Mollie API error handling guide.                                                                |
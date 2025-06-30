# UpdatePaymentNotFoundLinks

## Example Usage

```typescript
import { UpdatePaymentNotFoundLinks } from "mollie-api-typescript/models/operations";

let value: UpdatePaymentNotFoundLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                | [operations.UpdatePaymentNotFoundDocumentation](../../models/operations/updatepaymentnotfounddocumentation.md) | :heavy_check_mark:                                                                                             | The URL to the generic Mollie API error handling guide.                                                        |
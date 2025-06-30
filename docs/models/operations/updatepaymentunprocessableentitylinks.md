# UpdatePaymentUnprocessableEntityLinks

## Example Usage

```typescript
import { UpdatePaymentUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: UpdatePaymentUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                                                      | [operations.UpdatePaymentUnprocessableEntityDocumentation](../../models/operations/updatepaymentunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                   | The URL to the generic Mollie API error handling guide.                                                                              |
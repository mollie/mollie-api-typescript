# CancelPaymentUnprocessableEntityLinks

## Example Usage

```typescript
import { CancelPaymentUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: CancelPaymentUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `documentation`                                                                                                                      | [operations.CancelPaymentUnprocessableEntityDocumentation](../../models/operations/cancelpaymentunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                   | The URL to the generic Mollie API error handling guide.                                                                              |
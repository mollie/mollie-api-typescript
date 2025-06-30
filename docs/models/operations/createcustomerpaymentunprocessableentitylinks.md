# CreateCustomerPaymentUnprocessableEntityLinks

## Example Usage

```typescript
import { CreateCustomerPaymentUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: CreateCustomerPaymentUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                                      | [operations.CreateCustomerPaymentUnprocessableEntityDocumentation](../../models/operations/createcustomerpaymentunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                                   | The URL to the generic Mollie API error handling guide.                                                                                              |
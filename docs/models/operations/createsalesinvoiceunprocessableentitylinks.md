# CreateSalesInvoiceUnprocessableEntityLinks

## Example Usage

```typescript
import { CreateSalesInvoiceUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: CreateSalesInvoiceUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                                | [operations.CreateSalesInvoiceUnprocessableEntityDocumentation](../../models/operations/createsalesinvoiceunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                             | The URL to the generic Mollie API error handling guide.                                                                                        |
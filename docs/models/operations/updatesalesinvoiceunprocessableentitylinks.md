# UpdateSalesInvoiceUnprocessableEntityLinks

## Example Usage

```typescript
import { UpdateSalesInvoiceUnprocessableEntityLinks } from "mollie-api-typescript/models/operations";

let value: UpdateSalesInvoiceUnprocessableEntityLinks = {
  documentation: {
    href: "https://docs.mollie.com/errors",
    type: "text/html",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                                | [operations.UpdateSalesInvoiceUnprocessableEntityDocumentation](../../models/operations/updatesalesinvoiceunprocessableentitydocumentation.md) | :heavy_check_mark:                                                                                                                             | The URL to the generic Mollie API error handling guide.                                                                                        |
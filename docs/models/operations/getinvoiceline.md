# GetInvoiceLine

## Example Usage

```typescript
import { GetInvoiceLine } from "mollie-api-typescript/models/operations";

let value: GetInvoiceLine = {
  amount: {
    currency: "EUR",
    value: "10.00",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `period`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | The administrative period in `YYYY-MM` on which the line should be booked. |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Description of the product.                                                |
| `count`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | Number of products invoiced. For example, the number of payments.          |
| `vatPercentage`                                                            | *number*                                                                   | :heavy_minus_sign:                                                         | VAT percentage rate that applies to this product.                          |
| `amount`                                                                   | [operations.GetInvoiceAmount](../../models/operations/getinvoiceamount.md) | :heavy_minus_sign:                                                         | Line item amount excluding VAT.                                            |
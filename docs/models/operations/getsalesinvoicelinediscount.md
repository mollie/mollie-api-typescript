# GetSalesInvoiceLineDiscount

The discount to be applied to the line item.

## Example Usage

```typescript
import { GetSalesInvoiceLineDiscount } from "mollie-api-typescript/models/operations";

let value: GetSalesInvoiceLineDiscount = {
  type: "amount",
  value: "10.00",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [operations.GetSalesInvoiceLineType](../../models/operations/getsalesinvoicelinetype.md) | :heavy_check_mark:                                                                       | The type of discount.                                                                    | amount                                                                                   |
| `value`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | A string containing an exact monetary amount in the given currency, or the percentage.   | 10.00                                                                                    |
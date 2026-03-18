# SalesInvoiceDiscount

## Example Usage

```typescript
import { SalesInvoiceDiscount } from "mollie-api-typescript/models";

let value: SalesInvoiceDiscount = {
  type: "amount",
  value: "10.00",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.SalesInvoiceDiscountType](../models/salesinvoicediscounttype.md)               | :heavy_check_mark:                                                                     | The type of discount.                                                                  | amount                                                                                 |
| `value`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | A string containing an exact monetary amount in the given currency, or the percentage. | 10.00                                                                                  |
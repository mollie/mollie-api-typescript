# ListSalesInvoicesDiscount

The discount to be applied to the entire invoice, applied on top of any line item discounts.

## Example Usage

```typescript
import { ListSalesInvoicesDiscount } from "mollie-api-typescript/models/operations";

let value: ListSalesInvoicesDiscount = {
  type: "amount",
  value: "10.00",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.ListSalesInvoicesDiscountType](../../models/operations/listsalesinvoicesdiscounttype.md) | :heavy_check_mark:                                                                                   | The type of discount.                                                                                | amount                                                                                               |
| `value`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | A string containing an exact monetary amount in the given currency, or the percentage.               | 10.00                                                                                                |
# UpdateSalesInvoiceDiscountRequest

The discount to be applied to the entire invoice, possibly on top of the line item discounts.

## Example Usage

```typescript
import { UpdateSalesInvoiceDiscountRequest } from "mollie-api-typescript/models/operations";

let value: UpdateSalesInvoiceDiscountRequest = {
  type: "amount",
  value: "10.00",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.UpdateSalesInvoiceDiscountTypeRequest](../../models/operations/updatesalesinvoicediscounttyperequest.md) | :heavy_check_mark:                                                                                                   | The type of discount.                                                                                                | amount                                                                                                               |
| `value`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | A string containing an exact monetary amount in the given currency, or the percentage.                               | 10.00                                                                                                                |
# CreateSalesInvoiceDiscountResponse

The discount to be applied to the entire invoice, applied on top of any line item discounts.

## Example Usage

```typescript
import { CreateSalesInvoiceDiscountResponse } from "mollie-api-typescript/models/operations";

let value: CreateSalesInvoiceDiscountResponse = {
  type: "amount",
  value: "10.00",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.CreateSalesInvoiceDiscountTypeResponse](../../models/operations/createsalesinvoicediscounttyperesponse.md) | :heavy_check_mark:                                                                                                     | The type of discount.                                                                                                  | amount                                                                                                                 |
| `value`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | A string containing an exact monetary amount in the given currency, or the percentage.                                 | 10.00                                                                                                                  |
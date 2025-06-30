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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | The type of discount.<br/><br/>Possible values: `amount` `percentage`                  | amount                                                                                 |
| `value`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | A string containing an exact monetary amount in the given currency, or the percentage. | 10.00                                                                                  |
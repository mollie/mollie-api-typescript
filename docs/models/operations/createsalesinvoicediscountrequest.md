# CreateSalesInvoiceDiscountRequest

The discount to be applied to the entire invoice, applied on top of any line item discounts.

## Example Usage

```typescript
import { CreateSalesInvoiceDiscountRequest } from "mollie-api-typescript/models/operations";

let value: CreateSalesInvoiceDiscountRequest = {
  type: "amount",
  value: "10.00",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | The type of discount.<br/><br/>Possible values: `amount` `percentage`                  | amount                                                                                 |
| `value`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | A string containing an exact monetary amount in the given currency, or the percentage. | 10.00                                                                                  |
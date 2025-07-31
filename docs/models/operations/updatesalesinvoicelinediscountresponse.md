# UpdateSalesInvoiceLineDiscountResponse

The discount to be applied to the line item.

## Example Usage

```typescript
import { UpdateSalesInvoiceLineDiscountResponse } from "mollie-api-typescript/models/operations";

let value: UpdateSalesInvoiceLineDiscountResponse = {
  type: "amount",
  value: "10.00",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.UpdateSalesInvoiceLineTypeResponse](../../models/operations/updatesalesinvoicelinetyperesponse.md) | :heavy_check_mark:                                                                                             | The type of discount.                                                                                          | amount                                                                                                         |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | A string containing an exact monetary amount in the given currency, or the percentage.                         | 10.00                                                                                                          |
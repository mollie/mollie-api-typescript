# SalesInvoiceDiscountResponse

## Example Usage

```typescript
import { SalesInvoiceDiscountResponse } from "mollie-api-typescript/models";

let value: SalesInvoiceDiscountResponse = {
  type: "amount",
  value: "10.00",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [models.SalesInvoiceDiscountTypeResponse](../models/salesinvoicediscounttyperesponse.md) | :heavy_check_mark:                                                                       | The type of discount.                                                                    | amount                                                                                   |
| `value`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | A string containing an exact monetary amount in the given currency, or the percentage.   | 10.00                                                                                    |
# UpdateSalesInvoiceDiscountedSubtotalAmount

The total amount without VAT after discounts.

## Example Usage

```typescript
import { UpdateSalesInvoiceDiscountedSubtotalAmount } from "mollie-api-typescript/models/operations";

let value: UpdateSalesInvoiceDiscountedSubtotalAmount = {
  currency: "EUR",
  value: "10.00",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `currency`                                                          | *string*                                                            | :heavy_check_mark:                                                  | A three-character ISO 4217 currency code.                           | EUR                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | A string containing an exact monetary amount in the given currency. | 10.00                                                               |